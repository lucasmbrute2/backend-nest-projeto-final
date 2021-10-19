import { Type } from "class-transformer";
import { IsArray, IsBoolean, IsEmail, IsNotEmpty, IsOptional, isString, IsString, Length, Matches, ValidateNested } from "class-validator";
import { Cpf } from "src/decorators/cpf.decorator";
import { CreateProfileDto } from "src/profile/dto/create-profile.dto";
import { User } from "../entities/user.entity";

export class CreateUserDto extends User {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    lastName: string;

    @IsString()
    @Length(4, 20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'password too weak',
    })
    password: string;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    @Cpf()
    cpf: string;

    @IsBoolean()
    admin: boolean
}
