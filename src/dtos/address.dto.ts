import { IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateAddressDto {

    @IsOptional()
    @IsString()

    pinCode: string

    @IsOptional()
    @IsString()
    district: string

    @IsOptional()
    @IsNumber()
    state: number
    
    @IsOptional()
    @IsString()
    panchayath: string

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
    @IsNumber()
    localBody?: number

    @IsOptional()
    @IsString()
    postOffice?: string

    @IsOptional()
    @IsString()
    occupation?: string

    @IsOptional()
    @IsString()
    email?: string
}