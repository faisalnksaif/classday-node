import { IsDefined } from 'class-validator'
import { ValidateNested } from '@/middlewares/validation.middleware';

import { CreateParentDto } from './parent.dto';
import { CreateStudentPersonalDetailsDto, StudentAdmissionDto } from './student.dto';
import { AddressDto } from './address.dto';
import { CreateSchoolTransferDto } from './schoolTransfer.dto';

export class CreateStudentAdmissionDto {
  @IsDefined()
  @ValidateNested(CreateStudentPersonalDetailsDto)
  public personalDetails: CreateStudentPersonalDetailsDto

  @IsDefined()
  @ValidateNested(StudentAdmissionDto)
  public admissionDetails?: StudentAdmissionDto

  @IsDefined()
  @ValidateNested(CreateParentDto)
  public parentDetails: CreateParentDto

  @IsDefined()
  @ValidateNested(AddressDto)
  public address: AddressDto

  @IsDefined()
  @ValidateNested(CreateSchoolTransferDto)
  public schoolTransferDetails: CreateSchoolTransferDto
}