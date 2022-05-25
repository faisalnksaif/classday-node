import { IsNotEmpty, IsOptional, IsNumber, IsString } from 'class-validator';

export class CreateSchoolTransferDto {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  number?: string;

  @IsOptional()
  @IsNumber()
  date?: number

  @IsOptional()
  @IsNumber()
  admissionDate?: number;

  @IsOptional()
  @IsNumber()
  leavingDate?: number;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  prevSchool?: string
}