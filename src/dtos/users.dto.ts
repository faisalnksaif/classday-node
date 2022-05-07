import { ROLE } from '@/models/users.model';
import { IsOptional, IsString, IsNotEmpty, IsEnum } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  public firebaseUid: string;

  @IsOptional()
  @IsString()
  public email?: string;

  @IsNotEmpty()
  @IsString()
  public phoneNumber: string;

  @IsOptional()
  @IsString()
  public name?: string;

  @IsOptional()
  @IsString()
  public fcmToken?: string;
}

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  public firebaseUid?: string;

  @IsOptional()
  @IsString()
  public email?: string;

  @IsOptional()
  @IsString()
  public name?: string;

  @IsEnum(ROLE)
  public role?: ROLE;

  @IsOptional()
  @IsString()
  public phoneNumber?: string;
}

export class UpdateUserByAdminDto {
  @IsNotEmpty()
  @IsString()
  public email: string;

  @IsNotEmpty()
  @IsString()
  public name: string;

  @IsEnum(ROLE)
  public role: ROLE;
}