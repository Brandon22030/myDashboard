import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsEmail, IsNotEmpty, IsOptional, IsString, Min } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsNotEmpty()
    @IsString()
    fullname: string;
  
    @IsEmail()
    @IsNotEmpty()
    @IsString()
    email: string;
    
    @IsOptional()
    services: object[];
}
