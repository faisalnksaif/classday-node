import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateTcDto {
    @IsNotEmpty()
    number: string;

    @IsNotEmpty()
    date: string

    @IsOptional()
    admissionDate?: string;

    @IsNotEmpty()
    leavingDate: string;

    @IsNotEmpty()
    prevSchool: string
}