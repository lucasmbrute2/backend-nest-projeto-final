import { Prisma } from ".prisma/client";

export class Genre implements Prisma.genresUncheckedCreateInput {
    id?: number;
    name: string;
    gamesongenres?: Prisma.gamesongenresUncheckedCreateNestedManyWithoutGenresInput;
}
