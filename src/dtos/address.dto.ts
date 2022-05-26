import { IsString, IsOptional, IsNumber } from 'class-validator';

export class AddressDto {
  @IsOptional()
  @IsString()
  pinCode?: string

  @IsOptional()
  @IsString()
  district?: string

  @IsOptional()
  @IsNumber()
  state?: number

  @IsOptional()
  @IsString()
  panchayath?: string

  @IsOptional()
  @IsString()
  houseName?: string

  @IsOptional()
  @IsString()
  place?: string

  @IsOptional()
  @IsString()
  taluk?: string

  @IsOptional()
  @IsString()
  localBody?: string

  @IsOptional()
  @IsString()
  postOffice?: string

  @IsOptional()
  @IsString()
  email?: string

  @IsOptional()
  @IsString()
  localGovtDirectory?: string

  @IsOptional()
  @IsString()
  districtPanchayath?: string
}