import { IsString, IsNotEmpty } from 'class-validator';
import { Schema } from 'mongoose';

export class CreateClassDto {
  @IsNotEmpty()
  @IsString()
  public name: string;

  @IsNotEmpty()
  @IsString()
  public division: string;

  @IsNotEmpty()
  @IsString()
  public school: Schema.Types.ObjectId;
}