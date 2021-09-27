import { Prisma } from "@prisma/client";

export class CreateGameDto implements Prisma.GameCreateInput {
    title: string;
    cover: string;
    description: string;
    year: number;
    imdb: number;
    ytbTrailer: string;
    ytbGameplay: string;
    genre?: Prisma.GenresCreateNestedManyWithoutGameInput;
    user?: Prisma.UserOnGameCreateNestedManyWithoutGameInput;
}
