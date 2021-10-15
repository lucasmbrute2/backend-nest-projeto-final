import { IsArray, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Profile } from "../entities/profile.entity";

export class CreateProfileDto extends Profile {

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    image: string;

    @IsInt()
    userId: number

    @IsInt({ each: true })
    @IsArray()
    @IsOptional()
    gamesId?: number[]
}