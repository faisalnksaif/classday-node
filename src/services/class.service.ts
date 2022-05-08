import _ from 'lodash'
import classModel from '@/models/class.model';
import { IClass } from '@/interfaces/class.interface';
import { CreateClassDto } from '@/dtos/class.dto';

class ClassService {
  public classModel = classModel;

  public async create(data: CreateClassDto): Promise<IClass> {
    return this.classModel.create(data);
  }

  public async getAllBySchool(school: string): Promise<IClass[]> {
    return this.classModel.find({ school })
  }

  public async get(id: string): Promise<IClass> {
    return this.classModel.findOne({ _id: id })
  }
}

export default ClassService;
