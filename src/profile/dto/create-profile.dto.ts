import { Prisma } from "@prisma/client";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

import { Profile } from "../entities/profile.entity";

export class CreateProfileDto extends Profile {

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    image: string;

    game?: Prisma.ProfilesOnGamesUncheckedCreateNestedManyWithoutProfileInput;
}
