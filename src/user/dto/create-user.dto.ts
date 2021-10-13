import { Type } from "class-transformer";
import { IsArray, IsBoolean, IsEmail, IsNotEmpty, IsOptional, isString, IsString, ValidateNested } from "class-validator";
import { CreateProfileDto } from "src/profile/dto/create-profile.dto";
import { User } from "../entities/user.entity";

export class CreateUserDto extends User {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    lastName: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    cpf: string;

    @IsBoolean()
    admin: boolean

    @ValidateNested({ each: true })
    @IsOptional()
    @Type(() => CreateProfileDto)
    @IsArray()
    profile?: CreateProfileDto[];
}
