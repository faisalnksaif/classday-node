import _ from 'lodash'
import { IStudentParentRelation } from '@/interfaces/studentParentRelation.interface';
import studentParentRelationModel from '@/models/studentParentRelation.model';
import { CreateStudentParentRelationDto } from '@/dtos/studentParentRelation.dto';

class StudentParentRelationService {
  public studentParentRelation = studentParentRelationModel;

  public async create(data: CreateStudentParentRelationDto): Promise<IStudentParentRelation> {
    return this.studentParentRelation.create(data);
  }
}

export default StudentParentRelationService;
