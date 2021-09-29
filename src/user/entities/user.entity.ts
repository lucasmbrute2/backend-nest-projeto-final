import { Prisma } from ".prisma/client";

export class User implements Prisma.userUncheckedCreateInput {
    id?: number;
    name: string;
    lastName: string;
    password: string;
    email: string;
    cpf: string;
    profiles?: Prisma.profilesUncheckedCreateNestedManyWithoutUserInput;
    userongame?: Prisma.userongameUncheckedCreateNestedManyWithoutUserInput;
}
