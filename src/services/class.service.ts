import _ from 'lodash'

import classModel from '@/models/class.model';
import { IBaseClass, IClass } from '@/interfaces/class.interface';
import { CreateClassDto } from '@/dtos/class.dto';
import ClassMasterService from './classMaster.service';
import { IBaseClassMaster, IClassMaster } from '@/interfaces/classMaster.interface';
import { SECTION } from '@/models/classMaster.model';


class ClassService {
  public classModel = classModel;

  public async create(data: CreateClassDto): Promise<IClass> {
    return this.classModel.create(data);
  }

  public async createClassesWithSchoolCreation({
    lowerSection,
    higherSection,
    schoolId
  }: {
    lowerSection: string
    higherSection: string
    schoolId: string
  }): Promise<IClass[]> {
    const classes = await new ClassMasterService().getAll()
    const generatedClasses = this.generateClasses(classes, lowerSection, higherSection, schoolId)

    return this.classModel.insertMany(generatedClasses)
  }

  public async getAllBySchool(school: string): Promise<IClass[]> {
    return this.classModel.find({ school })
  }

  public async get(id: string): Promise<IClass> {
    return this.classModel.findOne({ _id: id })
  }


  public async getClassesBySection(section: SECTION): Promise<IClass[]> {
    return this.classModel.find({ section })
  }

  public generateClasses(classes: IBaseClassMaster[], lowerSection: string, higherSection: string, schoolId: string): IBaseClass[] {
    const lowerOrder = _.minBy(
      classes.filter(({ section }) => section === lowerSection),
      ({ order }) => order).order

    const higherOrder = _.maxBy(
      classes.filter(({ section }) => section === higherSection),
      ({ order }) => order).order

    const classesToInsert = classes.filter(({ order }) => order >= lowerOrder && order <= higherOrder)

    return [
      ...this.getClassByDivision(classesToInsert, 'A', schoolId),
      ...this.getClassByDivision(classesToInsert, 'B', schoolId),
      ...this.getClassByDivision(classesToInsert, 'C', schoolId),
      ...this.getClassByDivision(classesToInsert, 'D', schoolId),
      ...this.getClassByDivision(classesToInsert, 'E', schoolId),
      ...this.getClassByDivision(classesToInsert, 'F', schoolId),
    ];
  }

  private getClassByDivision(classes: IBaseClassMaster[], division: string, school: string): IBaseClass[] {
    return classes.map(({ name, section }) => {
      return {
        name,
        division,
        school,
        section,
      }
    })
  }
}

export default ClassService;
