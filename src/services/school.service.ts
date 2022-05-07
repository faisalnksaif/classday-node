import _ from 'lodash'
import schoolModel from '@/models/school.model';
import { ISchool } from '@/interfaces/school.interface';
import { CreateSchoolDto } from '@/dtos/school.dto';

class SchoolService {
  public school = schoolModel;

  public async create(data: CreateSchoolDto): Promise<ISchool> {
    return this.school.create(data);
  }
}

export default SchoolService;
