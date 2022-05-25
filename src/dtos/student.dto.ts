import { Schema } from 'mongoose';

import { IsString, IsNotEmpty, IsOptional, IsNumber, IsEnum, MaxLength, MinLength } from 'class-validator';
import { GENDER } from '@/models/student.model';

export class CreateStudentDto {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsString()
  school: Schema.Types.ObjectId;

  @IsOptional()
  @IsEnum(GENDER)
  gender?: GENDER

  @IsOptional()
  @IsNumber()
  dob?: number

  @IsOptional()
  @IsString()
  nationality?: string

  @IsOptional()
  @IsString()
  bloodGroup?: string

  @IsOptional()
  @IsNumber()
  height?: number

  @IsOptional()
  @IsNumber()
  weight?: number

  @IsOptional()
  @IsString()
  guardian?: string

  @IsOptional()
  @IsString()
  relationWithGuardian?: string

  @IsOptional()
  @IsString()
  @MaxLength(10)
  @MinLength(10)
  mobileNumber?: string

  @IsOptional()
  @IsString()
  email?: string
}

export class StudentAdmissionDto {
  @IsOptional()
  @IsNumber()
  dateOfAdmission?: number

  @IsOptional()
  @IsString()
  placeOfBirth?: string

  @IsOptional()
  @IsString()
  religion?: string

  @IsOptional()
  @IsString()
  cast?: string

  @IsOptional()
  @IsString()
  category?: string
}

export class GetStudentsDto {
  @IsOptional()
  @IsString()
  public grade: string;

  @IsOptional()
  @IsString()
  public division: string;
}