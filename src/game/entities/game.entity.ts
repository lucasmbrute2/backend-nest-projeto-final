import { Genre } from "src/genre/entities/genre.entity";

export class Game {
    id: number
    title: string;
    cover: string;
    description: string;
    year: number;
    imdb: number;
    trailerYtb: string;
    gameplayYtb: string;
    genres?: string[]
    updateGenres?: string[]
}