import { Schema } from 'mongoose';
import { IsString, IsNotEmpty, MaxLength, MinLength, IsOptional, IsEnum } from 'class-validator';
import { RATION_CARD_TYPE } from '@/models/parent.model';

export class CreateParentDto {
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

  /** May be parent already exists, this time we give parent id */
  @IsOptional()
  @IsString()
  public id?: Schema.Types.ObjectId;

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
  @IsString()
  public annualIncome?: string

  @IsOptional()
  @IsEnum(RATION_CARD_TYPE)
  public rationCardType?: RATION_CARD_TYPE
}
