import _ from 'lodash'
import { ClientSession } from 'mongoose';

import { CreateSchoolTransferDto } from '@/dtos/schoolTransfer.dto';
import { ISchoolTransfer } from '@/interfaces/schoolTransfer.interface';
import schoolTransferModel from '@/models/schoolTransfer.model';

class SchoolTransferService {
  public schoolTransfer = schoolTransferModel;

  public async create(data: CreateSchoolTransferDto, session?: ClientSession): Promise<ISchoolTransfer> {
    const transfers = await this.schoolTransfer.create([data], { session })
    if (transfers.length !== 1) throw new Error('Expected one transfer')
    
    return transfers[0]
  }
}

export default SchoolTransferService;
