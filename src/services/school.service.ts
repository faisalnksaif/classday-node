import _ from 'lodash'
import { PaginateResult, Schema } from 'mongoose'

import schoolModel from '@/models/school.model';
import { ISchool } from '@/interfaces/school.interface';
import { CreateSchoolDto } from '@/dtos/school.dto';
import ClassService from './class.service';
import { IClass } from '@/interfaces/class.interface';

class SchoolService {
  public school = schoolModel;

  public async create(data: CreateSchoolDto): Promise<{
    school: ISchool
    classes: IClass[]
  }> {
    const school = await this.school.create(data);
    const classes = await new ClassService().createClassesWithSchoolCreation({
      lowerSection: data.lowerSection,
      higherSection: data.higherSection,
      schoolId: school._id.toString()
    })

    return { school, classes }
  }

  public async get(id: Schema.Types.ObjectId): Promise<ISchool> {
    return this.school.findOne({ _id: id });
  }


  public async getAllBySchool(school: string): Promise<PaginateResult<ISchool>> {
    return this.school.paginate({ school });
  }
}

export default SchoolService;
