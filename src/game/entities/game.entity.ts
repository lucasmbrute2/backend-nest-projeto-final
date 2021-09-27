import { Prisma, prisma } from ".prisma/client";

export class Game implements Prisma.GameUncheckedCreateInput {
    id?: number;
    title: string;
    cover: string;
    description: string;
    year: number;
    imdb: number;
    ytbTrailer: string;
    ytbGameplay: string;
    genre?: Prisma.GenresUncheckedCreateNestedManyWithoutGameInput;
    user?: Prisma.UserOnGameUncheckedCreateNestedManyWithoutGameInput;
}
