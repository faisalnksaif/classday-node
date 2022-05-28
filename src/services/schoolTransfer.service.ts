import _ from 'lodash'
import { ClientSession, Schema } from 'mongoose';

import { CreateSchoolTransferDto } from '@/dtos/schoolTransfer.dto';
import { ISchoolTransfer } from '@/interfaces/schoolTransfer.interface';
import schoolTransferModel from '@/models/schoolTransfer.model';

class SchoolTransferService {
  public schoolTransfer = schoolTransferModel;

  public async create(data: CreateSchoolTransferDto, session?: ClientSession): Promise<ISchoolTransfer> {
    const transfers = await this.schoolTransfer.create([_.omit(data, '_id')], { session })
    if (transfers.length !== 1) throw new Error('Expected one transfer')

    return transfers[0]
  }

  public async update(id: Schema.Types.ObjectId, data: CreateSchoolTransferDto, session?: ClientSession): Promise<ISchoolTransfer> {
    const transfer = await this.schoolTransfer.findByIdAndUpdate(id, data, { session })

    return transfer
  }
}

export default SchoolTransferService;
