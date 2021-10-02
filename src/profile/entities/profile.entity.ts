import { Prisma } from ".prisma/client";

export class Profile implements Prisma.profilesUncheckedCreateInput {
    id?: number;
    title: string;
    image: string;
    userId: number;
}