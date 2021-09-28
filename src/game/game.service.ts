import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';

@Injectable()
export class GameService {
  constructor(public readonly prisma: PrismaService) { }

  create(data: CreateGameDto) {
    return this.prisma.game.create({
      data,
      include: {
        genre: {
          select: {
            name: true
          }
        }
      }
    })
  }

  findAll() {
    return this.prisma.game.findMany({
      include: {
        genre: {
          select: {
            name: true
          }
        },
      }
    })
  }

  findOne(id: number) {
    return this.prisma.game.findUnique({
      where: { id }
    })
  }

  update(id: number, data: UpdateGameDto) {
    return this.prisma.game.update({
      where: {
        id
      },
      data
    })
  }

  remove(id: number) {
    return this.prisma.game.delete({
      where: { id }
    })
  }
}
