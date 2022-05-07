import { IsString, IsNotEmpty } from 'class-validator';

export class CreateSchoolDto {
  @IsNotEmpty()
  @IsString()
  public name: string;

  @IsNotEmpty()
  @IsString()
  public address: string;
}