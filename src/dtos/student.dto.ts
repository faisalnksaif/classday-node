import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateStudentDto {
  @IsNotEmpty()
  @IsString()
  public name: string;

  @IsNotEmpty()
  @IsString()
  public school: string;

  @IsOptional()
  @IsString()
  public mobileNumber?: string;
}