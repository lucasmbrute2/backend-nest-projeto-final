import { Prisma } from ".prisma/client";


export class Profile {
    id?: number;
    title: string;
    image: string;
    userId: number;
    game?: Prisma.ProfilesOnGamesUncheckedCreateNestedManyWithoutProfileInput;

}

