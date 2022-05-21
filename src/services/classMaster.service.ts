import _ from 'lodash'

import classMasterModel from '@/models/classMaster.model';
import { IClassMaster } from '@/interfaces/classMaster.interface';
import { CreateClassMasterDto } from '@/dtos/classMaster.dto';

class ClassMasterService {
  public classMasterModel = classMasterModel;

  public async create(data: CreateClassMasterDto): Promise<IClassMaster> {
    return this.classMasterModel.create(data);
  }

  public async get(id: string): Promise<IClassMaster> {
    return this.classMasterModel.findOne({ _id: id })
  }

  public async getAll(): Promise<IClassMaster[]> {
    return this.classMasterModel.find().sort({ order: 1 })
  }
}

export default ClassMasterService;
