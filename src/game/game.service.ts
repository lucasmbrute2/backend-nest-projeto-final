import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';

@Injectable()
export class GameService {
  constructor(private prisma: PrismaService) { }

  private readonly _include = {

  }
  create(data: CreateGameDto) {
    return this.prisma.game.create({
      data,
      include: { gamesongenres: true }
    })
  }

  findAll() {
    return this.prisma.game.findMany({
      include: {
        gamesongenres: {
          select: {
            genres: {
              select:
              {
                name: true
              }
            }
          }
        }
      }
    })
  }

  findOne(id: number) {
    return this.prisma.game.findUnique({
      where: {
        id
      }
    })
  }

  update(id: number, updateGameDto: UpdateGameDto) {
    return `This action updates a #${id} game`;
  }

  remove(id: number) {
    return `This action removes a #${id} game`;
  }
}
