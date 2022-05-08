import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { Schema } from 'mongoose';

export class CreateStudentAdmissionDto {
  @IsNotEmpty()
  @IsString()
  public name: string;

  @IsNotEmpty()
  @IsString()
  public school: Schema.Types.ObjectId;

  @IsNotEmpty()
  @IsString()
  public parent: Schema.Types.ObjectId;

  @IsOptional()
  @IsString()
  public mobileNumber?: string;
}