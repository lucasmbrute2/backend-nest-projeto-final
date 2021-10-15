import { Type } from "class-transformer";
import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";
import { Genre } from "src/genre/entities/genre.entity";
import { Game } from "../entities/game.entity";

export class CreateGameDto extends Game {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    @IsString()
    cover: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsNumber()
    year: number;

    @IsNotEmpty()
    @IsNumber()
    imdb: number;

    @IsNotEmpty()
    @IsString()
    trailerYtb: string;

    @IsNotEmpty()
    @IsString()
    gameplayYtb: string;

    @IsString({ each: true })
    @IsOptional()
    @IsArray()
    @IsNotEmpty({ each: true })
    genres?: string[]
}
