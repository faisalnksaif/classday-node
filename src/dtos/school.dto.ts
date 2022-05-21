import { SECTION } from '@/models/classMaster.model';
import { IsString, IsNotEmpty, IsEnum } from 'class-validator';

export class CreateSchoolDto {
  @IsNotEmpty()
  @IsString()
  public name: string;

  @IsNotEmpty()
  @IsString()
  public address: string;

  @IsEnum(SECTION)
  public lowerSection: SECTION;

  @IsEnum(SECTION)
  public higherSection: SECTION;
}