import _ from 'lodash'
import { ClientSession, Schema } from 'mongoose';

import studentModel from '@/models/student.model';
import { CreateStudentPersonalDetailsDto, GetStudentsDto } from '@/dtos/student.dto';
import { IStudent } from '@/interfaces/student.interface';

class StudentService {
  public student = studentModel;

  public async create({
    studentDetails,
    parent,
    schoolTransfer,
    session
  }: {
    studentDetails: CreateStudentPersonalDetailsDto,
    parent?: Schema.Types.ObjectId,
    schoolTransfer?: Schema.Types.ObjectId,
    session?: ClientSession
  }): Promise<IStudent> {
    const students = await this.student.create([{
      ...studentDetails,
      parent,
      schoolTransfer
    }], { session })
    if (students.length !== 1) throw new Error('Expected one student')

    return students[0]
  }

  public async getAll(data: GetStudentsDto): Promise<IStudent[]> {
    return this.student.find();
  }
}

export default StudentService;
