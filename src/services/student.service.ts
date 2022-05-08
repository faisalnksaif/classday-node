import _ from 'lodash'
import studentModel from '@/models/student.model';
import { CreateStudentDto } from '@/dtos/student.dto';
import { IStudent } from '@/interfaces/student.interface';

class StudentService {
  public student = studentModel;

  public async create(data: CreateStudentDto): Promise<IStudent> {
    return this.student.create(data);
  }
}

export default StudentService;
