import { Prisma } from ".prisma/client";

export class User {
    id?: number;
    name: string;
    lastName: string;
    email: string;
    password: string;
    cpf: string;
    admin?: boolean;
    profile?: Profile[];
}

export class Profile {
    id?: number;
    title: string;
    image: string;
    userId: number;
    game?: Prisma.ProfilesOnGamesUncheckedCreateNestedManyWithoutProfileInput;
}