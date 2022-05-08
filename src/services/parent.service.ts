import _ from 'lodash'
import { PaginateResult } from 'mongoose'

import { IParent } from '@/interfaces/parent.interface';
import { CreateParentDto } from '@/dtos/parent.dto';
import parentModel from '@/models/parent.model';

class ParentService {
  public parent = parentModel;

  public async create(data: CreateParentDto): Promise<IParent> {
    return this.parent.create(data);
  }

  public async get(id: string): Promise<IParent> {
    return this.parent.findOne({ _id: id });
  }

  public async getAllBySchool(school: string): Promise<PaginateResult<IParent>> {
    return this.parent.paginate({ school });
  }
}

export default ParentService;
