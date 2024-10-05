import {
  IsAlphanumeric,
  IsEmail,
  IsNotEmpty,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @Min(4)
  fullname: string;

  @IsEmail()
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  @IsAlphanumeric()
  password: string;
}
