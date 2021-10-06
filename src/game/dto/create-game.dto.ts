import { Prisma } from ".prisma/client";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";
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
    ytbTrailer: string;

    @IsNotEmpty()
    @IsString()
    ytbGameplay: string;

    profiles?: Prisma.ProfilesOnGamesCreateNestedManyWithoutGameInput;
    genres?: Prisma.GamesOnGenresCreateNestedManyWithoutGameInput;
}
