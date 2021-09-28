import { Prisma } from "@prisma/client";

export class Game implements Prisma.gameUncheckedCreateInput {
    id?: number;
    title: string;
    cover: string;
    description: string;
    year: number;
    imdb: number;
    ytbTrailer: string;
    ytbGameplay: string;
    gamesongenres?: Prisma.gamesongenresUncheckedCreateNestedManyWithoutGameInput;
    userongame?: Prisma.userongameUncheckedCreateNestedManyWithoutGameInput;
}
