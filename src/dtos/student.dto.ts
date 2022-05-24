import { Schema } from 'mongoose';

import { IsString, IsNotEmpty, IsOptional, IsObject, isNotEmpty, IsEnum, ValidateNested } from 'class-validator';
import { CreateParentDto } from './parent.dto';
import { GENDER } from '@/models/student.model';
import { CreateAddressDto } from './address.dto';
import { CreateTcDto } from './tc.dto';


export class CreateStudentDto {
    @IsNotEmpty()
    name: string

    @IsEnum(GENDER)
    gender: GENDER

    @IsNotEmpty()
    dob: string

    @IsNotEmpty()
    age: string

    @IsNotEmpty()
    nationality: string

    @IsNotEmpty()
    @IsString()
    school: Schema.Types.ObjectId;

    @IsNotEmpty()
    @IsString()
    parent: Schema.Types.ObjectId;

    @IsNotEmpty()
    @IsString()
    address: Schema.Types.ObjectId;

    @IsNotEmpty()
    @IsString()
    dateOfAdmission: string

    @IsOptional()
    @IsString()
    bloodGroup?: string

    @IsOptional()
    @IsString()
    height?: string

    @IsOptional()
    @IsString()
    weight?: string

    @IsOptional()
    @IsString()
    guardian?: string

    @IsOptional()
    @IsString()
    relationWithGuardian?: string

    @IsOptional()
    @IsString()
    placeOfBirth?: string

    @IsOptional()
    @IsString()
    religion?: string

    @IsOptional()
    @IsString()
    cast?: string

    @IsOptional()
    @IsString()
    category?: string

    @IsOptional()
    @IsString()
    mobileNumber?: string
}
export class AddStudentDto {
    @IsNotEmpty()
    @ValidateNested()
    public student: CreateStudentDto

    @IsNotEmpty()
    @ValidateNested()
    public address: CreateAddressDto

    @IsNotEmpty()
    @ValidateNested()
    public parent: CreateParentDto

    @IsOptional()
    @IsObject()
    public tc: CreateTcDto
}

export class GetStudentsDto {
    @IsOptional()
    @IsString()
    public grade: string;

    @IsOptional()
    @IsString()
    public division: string;
}