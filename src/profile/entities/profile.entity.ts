import { ConnectGameDto } from "src/game/dto/connect-game.dto";

export class Profile {
    id?: number;
    title: string;
    image: string;
    userId: number;
    game?: ConnectGameDto[]

}