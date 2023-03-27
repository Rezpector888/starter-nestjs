import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    @IsString()
    @MinLength(5)
    @MaxLength(100)
    @IsNotEmpty()
    username: string;


    @IsString()
    @MinLength(8)
    @MaxLength(100)
    @IsNotEmpty()
    password: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

}
