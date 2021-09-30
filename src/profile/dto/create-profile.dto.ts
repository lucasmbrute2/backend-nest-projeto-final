import { IsNotEmpty, IsString } from "class-validator";
import { Profile } from "../entities/profile.entity";

export class CreateProfileDto extends Profile {
    @IsNotEmpty()
    id?: number;

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    image: string;

    @IsNotEmpty()
    userId: number;
}
