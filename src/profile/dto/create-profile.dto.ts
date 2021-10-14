import { IsArray, IsInt, IsNotEmpty, IsString } from "class-validator";
import { ConnectGameDto } from "src/game/dto/connect-game.dto";
import { Profile } from "../entities/profile.entity";

export class CreateProfileDto extends Profile {

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    image: string;

    @IsInt()
    userId: number;

    @IsInt({ each: true })
    @IsArray()
    game?: ConnectGameDto[]

}