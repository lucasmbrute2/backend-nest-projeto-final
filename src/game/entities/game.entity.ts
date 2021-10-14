import { Prisma } from "@prisma/client";

export class Game {
    id: number
    title: string;
    cover: string;
    description: string;
    year: number;
    imdb: number;
    trailerYtb: string;
    gameplayYtb: string;

    genres?: Prisma.GamesOnGenresCreateNestedManyWithoutGameInput;

}