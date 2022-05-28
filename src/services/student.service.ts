import _ from 'lodash'
import { ClientSession, Schema } from 'mongoose';

import studentModel from '@/models/student.model';
import SchoolService from '@/services/school.service';
import { CreateStudentPersonalDetailsDto, GetStudentsDto, StudentAdmissionDto } from '@/dtos/student.dto';
import { IStudent, IStudentClass } from '@/interfaces/student.interface';

class StudentService {
  public student = studentModel;
  public schoolService = new SchoolService()

  public async create({
    studentPersonalDetails,
    admissionDetails,
    parent,
    schoolTransfer,
    session
  }: {
    studentPersonalDetails: CreateStudentPersonalDetailsDto,
    admissionDetails: StudentAdmissionDto
    parent?: Schema.Types.ObjectId,
    schoolTransfer?: Schema.Types.ObjectId,
    session?: ClientSession
  }): Promise<IStudent> {
    const school = await this.schoolService.get(studentPersonalDetails.school)
    const currentAcademicYear = school.academicYears.find(({ isActive }) => isActive)
    if (!currentAcademicYear) throw new Error('Cannot find academic year')

    const students = await this.student.create([{
      ...studentPersonalDetails,
      ..._.omit(admissionDetails, ['grade', 'division']),
      classes: this.getNewClassMap([], currentAcademicYear.name, admissionDetails.grade, admissionDetails.division),
      parent,
      schoolTransfer
    }], { session })
    if (students.length !== 1) throw new Error('Expected one student')

    return students[0]
  }

  public async update({
    id,
    studentPersonalDetails,
    admissionDetails,
    session
  }: {
    id: string
    studentPersonalDetails: CreateStudentPersonalDetailsDto,
    admissionDetails: StudentAdmissionDto
    session?: ClientSession
  }): Promise<IStudent> {
    const school = await this.schoolService.get(studentPersonalDetails.school)
    const currentAcademicYear = school.academicYears.find(({ isActive }) => isActive)
    if (!currentAcademicYear) throw new Error('Cannot find academic year')

    const existingRecord = await this.student.findById(id)
    const student = await this.student.findByIdAndUpdate(id, {
      ..._.omit(studentPersonalDetails, 'school'),
      ..._.omit(admissionDetails, ['grade', 'division']),
      classes: this.getNewClassMap(existingRecord.classes, currentAcademicYear.name, admissionDetails.grade, admissionDetails.division)
    }, { session, new: true })

    return student
  }


  private getNewClassMap(classes: IStudentClass[], academicYear: string, newClass?: string, newDivision?: string): IStudentClass[] {
    if (!newClass) return classes

    const existingClassIndex = classes.findIndex(({ name }) => name === newClass)
    if (existingClassIndex > -1) {
      classes[existingClassIndex].division = newDivision
      return classes
    }

    classes.forEach((existingClass) => {
      existingClass.isActive = false
    })

    classes.push({
      name: newClass,
      division: newDivision,
      academicYear,
      isActive: true,
    })

    return classes
  }
}

export default StudentService;
