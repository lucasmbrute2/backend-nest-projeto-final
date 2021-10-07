import { Prisma, User } from ".prisma/client";


export class Profile {
    id?: number;
    title: string;
    image: string;
    user: User;
    game?: Prisma.ProfilesOnGamesUncheckedCreateNestedManyWithoutProfileInput;

}

