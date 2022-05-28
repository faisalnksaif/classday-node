import { IsDefined, IsNotEmpty, IsOptional, IsString, IsEnum } from 'class-validator'
import { ValidateNested } from '@/middlewares/validation.middleware';

import { CreateParentDto, UpdateParentDto } from './parent.dto';
import { CreateStudentPersonalDetailsDto, StudentAdmissionDto } from './student.dto';
import { AddressDto } from './address.dto';
import { CreateSchoolTransferDto, UpdateSchoolTransferDto } from './schoolTransfer.dto';
import { SECTION } from '@/models/classMaster.model';

export class CreateStudentAdmissionDto {
  @IsDefined()
  @ValidateNested(CreateStudentPersonalDetailsDto)
  public personalDetails: CreateStudentPersonalDetailsDto

  @IsDefined()
  @ValidateNested(StudentAdmissionDto)
  public admissionDetails: StudentAdmissionDto

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

export class UpdateStudentAdmissionDto {
  @IsDefined()
  @ValidateNested(CreateStudentPersonalDetailsDto)
  public personalDetails: CreateStudentPersonalDetailsDto

  @IsDefined()
  @ValidateNested(StudentAdmissionDto)
  public admissionDetails: StudentAdmissionDto

  @IsDefined()
  @ValidateNested(UpdateParentDto)
  public parentDetails: UpdateParentDto

  @IsDefined()
  @ValidateNested(AddressDto)
  public address: AddressDto

  @IsDefined()
  @ValidateNested(UpdateSchoolTransferDto)
  public schoolTransferDetails: UpdateSchoolTransferDto
}

export class GetStudentAdmission {
  @IsOptional()
  @IsEnum(SECTION)
  public section?: SECTION

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  public grade?: string

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  public division?: string

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  public name?: string
}