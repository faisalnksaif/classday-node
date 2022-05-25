import { IsDefined } from 'class-validator'
import { ValidateNested } from '@/middlewares/validation.middleware';

import { CreateParentDto } from './parent.dto';
import { CreateStudentDto, StudentAdmissionDto } from './student.dto';
import { AddressDto } from './address.dto';
import { CreateSchoolTransferDto } from './schoolTransfer.dto';

export class CreateStudentAdmissionDto {
  @IsDefined()
  @ValidateNested(CreateStudentDto)
  public student: CreateStudentDto

  @IsDefined()
  @ValidateNested(StudentAdmissionDto)
  public admissionDetails?: StudentAdmissionDto

  @IsDefined()
  @ValidateNested(CreateParentDto)
  public parent: CreateParentDto

  @IsDefined()
  @ValidateNested(AddressDto)
  public address: AddressDto

  @IsDefined()
  @ValidateNested(CreateSchoolTransferDto)
  public schoolTransfer: CreateSchoolTransferDto
}