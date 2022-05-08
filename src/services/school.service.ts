import _ from 'lodash'
import { PaginateResult } from 'mongoose'

import schoolModel from '@/models/school.model';
import { ISchool } from '@/interfaces/school.interface';
import { CreateSchoolDto } from '@/dtos/school.dto';

class SchoolService {
  public school = schoolModel;

  public async create(data: CreateSchoolDto): Promise<ISchool> {
    return this.school.create(data);
  }

  public async get(id: string): Promise<ISchool> {
    return this.school.findOne({ _id: id });
  }


  public async getAllBySchool(school: string): Promise<PaginateResult<ISchool>> {
    return this.school.paginate({ school });
  }
}

export default SchoolService;
