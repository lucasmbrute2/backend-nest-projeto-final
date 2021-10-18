import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';

@Injectable()
export class GameService {
  constructor(private prisma: PrismaService) { }

  private readonly _include = {
    genres: {
      select: {
        genre: {
          select: {
            name: true
          }
        }
      }
    },
    profiles: true

  }
  create(dto: CreateGameDto) {

    const data: Prisma.GameCreateInput = {
      ...dto,
      genres: {
        create: dto.genres.map(genre => ({
          genre: {
            connectOrCreate: {
              where: { name: genre },
              create: {
                name: genre
              }
            }
          }
        })) || []
      }
    }

    return this.prisma.game.create({
      data,
      include: this._include
    })
  }
  findAll() {
    return this.prisma.game.findMany({
      include: this._include
    })
  }
  findOne(id: number) {
    return this.prisma.game.findUnique({
      where: {
        id
      }, rejectOnNotFound: true
    })
  }

  update(id: number, data: UpdateGameDto) {
    return this.prisma.game.update({
      where: {
        id
      },
      data,
      include: this._include
    })

  }
  remove(id: number) {
    return this.prisma.game.delete({
      where: {
        id
      }
    })
  }
}
