import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Genre } from "../entities/genre.entity";

export class CreateGenreDto extends Genre {
    @IsInt()
    @IsOptional()
    id?: number;

    @IsString()
    @IsNotEmpty()
    name: string;
}
