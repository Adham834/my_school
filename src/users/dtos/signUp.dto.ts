import { IsEmail, IsString, IsStrongPassword } from 'class-validator';

export class signUpDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: String;
}
