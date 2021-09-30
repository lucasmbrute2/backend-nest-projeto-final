import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';

@Injectable()
export class GenreService {
  constructor(private prisma: PrismaService) { }

  private readonly _include = {
    gamesongenres: {
      include: {
        game: true
      }
    }
  }
  create(createGenreDto: CreateGenreDto) {
    return this.prisma.genres.create({

    })
  }

  findAll() {
    return this.prisma.genres.findMany({
      include: this._include
    })
  }

  findOne(id: number) {
    return this.prisma.genres.findUnique({
      where: {
        id
      },
      include: this._include
    })
  }

  update(id: number, updateGenreDto: UpdateGenreDto) {
    return `This action updates a #${id} genre`;
  }

  remove(id: number) {
    return `This action removes a #${id} genre`;
  }
}
