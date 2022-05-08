import { IsString, IsNotEmpty } from 'class-validator';
import { Schema } from 'mongoose';

export class CreateStudentParentRelationDto {
  @IsNotEmpty()
  @IsString()
  public student: Schema.Types.ObjectId;

  @IsNotEmpty()
  @IsString()
  public parent: Schema.Types.ObjectId;
}