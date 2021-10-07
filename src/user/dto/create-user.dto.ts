import { IsEmail, IsNotEmpty, IsOptional, isString, IsString, ValidateNested } from "class-validator";
import { CreateProfileDto } from "src/dto/profile/create-profile.dto";
import { Profile } from "src/entities/profile/profile.entity";
import { User } from "../entities/user.entity";

export class CreateUserDto extends User {
    id?: number;

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

    @ValidateNested({ each: true })
    @IsOptional()

    profile?: CreateProfileDto[];
}
