import { Prisma } from "@prisma/client";

export class Game implements Prisma.GameCreateInput {
    title: string;
    cover: string;
    description: string;
    year: number;
    imdb: number;
    trailerYtb: string;
    gameplayYtb: string;
    profiles?: Prisma.ProfilesOnGamesCreateNestedManyWithoutGameInput;
    genres?: Prisma.GamesOnGenresCreateNestedManyWithoutGameInput;

}