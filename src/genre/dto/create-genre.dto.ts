import { Prisma } from "@prisma/client";
import { IsNotEmpty, IsString } from "class-validator";
import { Genre } from "../entities/genre.entity";

export class CreateGenreDto extends Genre {
    id?: number;

    @IsString()
    @IsNotEmpty()
    name: string;

    gamesongenres?: Prisma.gamesongenresUncheckedCreateNestedManyWithoutGenresInput;
}
