import _ from 'lodash'
import { ClientSession, PaginateResult, Schema } from 'mongoose'

import { IParent } from '@/interfaces/parent.interface';
import { CreateParentDto } from '@/dtos/parent.dto';
import parentModel from '@/models/parent.model';
import { AddressDto } from '@/dtos/address.dto';

class ParentService {
  public parent = parentModel;

  public async create(parentDetails: CreateParentDto, address?: AddressDto, session?: ClientSession): Promise<IParent> {
    const parents = await this.parent.create([{
      ...parentDetails,
      address
    }], { session });
    if (parents.length !== 1) throw new Error('Expected one parent')

    return parents[0]
  }

  public async update(
    id: Schema.Types.ObjectId, parentDetails: CreateParentDto, address?: AddressDto, session?: ClientSession): Promise<IParent> {
    const parent = await this.parent.findByIdAndUpdate(id, {
      ...parentDetails,
      address
    }, { session });

    return parent
  }

  public async get(id: string): Promise<IParent> {
    return this.parent.findOne({ _id: id });
  }

  public async getByMobileNumber(mobileNumber: string): Promise<IParent> {
    return this.parent.findOne({ mobileNumber: mobileNumber });
  }

  public async getAllBySchool(school: string): Promise<PaginateResult<IParent>> {
    return this.parent.paginate({ school });
  }
}

export default ParentService;
