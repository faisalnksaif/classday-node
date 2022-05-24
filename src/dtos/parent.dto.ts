import { IsString, IsNotEmpty, MaxLength, MinLength, IsOptional } from 'class-validator';
import { Schema } from 'mongoose';

export class CreateParentDto {
  @IsNotEmpty()
  @IsString()
  public name: string;

  @IsNotEmpty()
  @IsString()
  public occupation: string

  @IsOptional()
  @IsString()
  public income: string

  @IsNotEmpty()
  @IsString()
  public rationCard: string

  @IsNotEmpty()
  @IsString()
  public address: Schema.Types.ObjectId

  @IsNotEmpty()
  @IsString()
  @MaxLength(10)
  @MinLength(10)
  public mobileNumber: string;
}