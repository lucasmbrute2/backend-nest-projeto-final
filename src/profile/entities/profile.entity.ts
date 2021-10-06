import { Prisma } from ".prisma/client";

export class Profile implements Prisma.ProfileUncheckedCreateInput {
    id?: number;
    title: string;
    image: string;
    userId: number;
    game?: Prisma.ProfilesOnGamesUncheckedCreateNestedManyWithoutProfileInput;

}