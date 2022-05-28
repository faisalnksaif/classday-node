import { IsNotEmpty, IsOptional, IsNumber, IsString } from 'class-validator';
import { Schema } from 'mongoose';

export class CreateSchoolTransferDto {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  public number?: string;

  @IsOptional()
  @IsString()
  public date?: string

  @IsOptional()
  @IsString()
  public admissionDate?: string;

  @IsOptional()
  @IsString()
  public leavingDate?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  public prevSchool?: string
}

export class UpdateSchoolTransferDto extends CreateSchoolTransferDto {
  @IsNotEmpty()
  @IsString()
  public _id: Schema.Types.ObjectId;
}