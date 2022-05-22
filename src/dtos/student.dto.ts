import { Schema } from 'mongoose';

import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateStudentDto {
  @IsNotEmpty()
  @IsString()
  public name: string;

  @IsNotEmpty()
  @IsString()
  public school: Schema.Types.ObjectId;

  @IsOptional()
  @IsString()
  public mobileNumber?: string;
}

export class GetStudentsDto {
  @IsOptional()
  @IsString()
  public grade: string;

  @IsOptional()
  @IsString()
  public division: string;
}