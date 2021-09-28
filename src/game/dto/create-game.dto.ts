import { Prisma } from ".prisma/client";
import { IsNotEmpty, IsString } from "class-validator";
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
    year: number;

    @IsNotEmpty()
    imdb: number;

    @IsNotEmpty()
    @IsString()
    ytbTrailer: string;

    @IsNotEmpty()
    @IsString()
    ytbGameplay: string;


    gamesongenres?: Prisma.gamesongenresUncheckedCreateNestedManyWithoutGameInput;
    userongame?: Prisma.userongameUncheckedCreateNestedManyWithoutGameInput;
}
