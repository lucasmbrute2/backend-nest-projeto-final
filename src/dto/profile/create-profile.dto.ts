import { Prisma } from ".prisma/client";
import { IsOptional, IsString } from "class-validator";
import { Profile } from "src/entities/profile/profile.entity";

export class CreateProfileDto extends Profile {
    @IsString()
    title: string;

    @IsString()
    image: string;

    @IsOptional()
    game?: Prisma.ProfilesOnGamesUncheckedCreateNestedManyWithoutProfileInput;
}