import { Profile } from "src/profile/entities/profile.entity";

export class User {
    id?: number;
    name: string;
    lastName: string;
    email: string;
    password: string;
    cpf: string;
    admin?: boolean;
    profile?: Profile[]
}
