import { IsString, IsNotEmpty, MaxLength, MinLength, IsOptional } from 'class-validator';
import { Schema } from 'mongoose';

export class CreateParentDto {
  @IsNotEmpty()
  @IsString()
  public name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(10)
  @MinLength(10)
  public mobileNumber: string;

  /** May be parent already exists, this time we give parent id */
  @IsOptional()
  @IsString()
  public id?: Schema.Types.ObjectId;

  @IsOptional()
  @IsString()
  public occupation?: string

  @IsOptional()
  @IsString()
  public income?: string

  @IsOptional()
  @IsString()
  public rationCard?: string
}