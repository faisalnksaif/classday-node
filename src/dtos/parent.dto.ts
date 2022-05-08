import { IsString, IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { Schema } from 'mongoose';

export class CreateParentDto {
  @IsNotEmpty()
  @IsString()
  public name: string;

  @IsNotEmpty()
  @IsString()
  public school: Schema.Types.ObjectId;

  @IsNotEmpty()
  @IsString()
  @MaxLength(10)
  @MinLength(10)
  public mobileNumber: string;
}