import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';

@Injectable()
export class GameService {
  constructor(public readonly prisma: PrismaService) { }

  create(data: CreateGameDto) {
    return this.prisma.game.create({ data })
  }

  findAll() {
    return this.prisma.game.findMany({})
  }

  findOne(id: number) {
    return this.prisma.game.findUnique({
      where: { id }
    })
  }

  update(id: number, updateGameDto: UpdateGameDto) {
    return `This action updates a #${id} game`;
  }

  remove(id: number) {
    return `This action removes a #${id} game`;
  }
}
