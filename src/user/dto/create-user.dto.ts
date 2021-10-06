import { Prisma } from "@prisma/client";
import { IsEmail, IsNotEmpty, isString, IsString } from "class-validator";
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


    profile?: Prisma.ProfileUncheckedCreateNestedManyWithoutUserInput;

}
