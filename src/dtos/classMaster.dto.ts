import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateClassMasterDto {
  @IsNotEmpty()
  @IsString()
  public name: string;

  @IsNumber()
  public order: number;
}