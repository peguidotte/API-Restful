import { IsEmail, IsNotEmpty, IsOptional, MinLength } from "class-validator";
import { EmailIsUnique } from "../validation/emailIsUnique.validator";

export class UpdateUserDTO {

    @IsNotEmpty()
    @IsOptional()
    name: string;

    @IsEmail()
    @EmailIsUnique({ message: "Email already exists" })
    @IsOptional()
    email: string;

    @MinLength(6)
    @IsOptional()
    password: string;

}