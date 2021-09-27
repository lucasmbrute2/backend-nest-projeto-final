import { Prisma } from "@prisma/client";
import { IsNotEmpty, IsString } from "class-validator";
import { Game } from "../entities/game.entity";

export class CreateGameDto extends Game {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    cover: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    year: number;

    @IsNotEmpty()
    imdb: number;

    @IsNotEmpty()
    ytbTrailer: string;

    @IsNotEmpty()
    ytbGameplay: string;


    genre?: Prisma.GenresCreateNestedManyWithoutGameInput;
    user?: Prisma.UserOnGameCreateNestedManyWithoutGameInput;
}
