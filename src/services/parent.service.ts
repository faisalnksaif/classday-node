import _ from 'lodash'
import { IParent } from '@/interfaces/parent.interface';
import { CreateParentDto } from '@/dtos/parent.dto';
import parentModel from '@/models/parent.model';

class ParentService {
  public parent = parentModel;

  public async create(data: CreateParentDto): Promise<IParent> {
    return this.parent.create(data);
  }
}

export default ParentService;
