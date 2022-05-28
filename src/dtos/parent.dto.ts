import { Schema } from 'mongoose';
import { IsString, IsNotEmpty, MaxLength, MinLength, IsOptional, IsEnum, ValidateIf, IsNumber } from 'class-validator';
import { RATION_CARD_TYPE } from '@/models/parent.model';

export class ParentDto {
  @IsNotEmpty()
  @IsString()
  public fatherName: string;

  @IsNotEmpty()
  @IsString()
  public motherName: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(10)
  @MinLength(10)
  public mobileNumber: string;

  @IsOptional()
  @IsString()
  public guardian?: string

  @IsOptional()
  @IsString()
  public occupationOfGuardian?: string

  @IsOptional()
  @IsString()
  public relationWithGuardian?: string

  @IsOptional()
  @IsNumber()
  public annualIncome?: number

  @ValidateIf((value) => value !== null)
  @IsOptional()
  @IsEnum(RATION_CARD_TYPE)
  public rationCardType?: RATION_CARD_TYPE
}
export class CreateParentDto extends ParentDto {
  /** May be parent already exists, this time we give parent id */
  @IsOptional()
  @IsString()
  public id?: Schema.Types.ObjectId;
}

export class UpdateParentDto extends ParentDto {
  @IsNotEmpty()
  @IsString()
  public id: Schema.Types.ObjectId;
}