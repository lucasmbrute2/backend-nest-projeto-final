import { IsInt } from "class-validator";

export class ConnectGameDto {
    @IsInt()
    id: number
}