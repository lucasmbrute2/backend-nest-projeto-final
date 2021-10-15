import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfileService {
  constructor(private prisma: PrismaService) { }

  private readonly _include = {
    user: true,
    game: {
      include: {
        game: true
      }
    }

  }
  create(data: CreateProfileDto) {
    return this.prisma.profile.create({
      data,
      include: this._include
    })
  }

  findAll() {
    return this.prisma.profile.findMany({
      include: this._include
    })
  }

  async findOne(id: number) {
    return this.prisma.profile.findUnique({
      where: {
        id
      },
      include: this._include,
      rejectOnNotFound: true
    })
  }

  async update(id: number, dto: UpdateProfileDto) {
    const data: Prisma.ProfileUpdateInput = {
      ...dto,
      game: {
        create: dto.game.map(gameId => ({
          gameId
        }))
      }
    }

    return this.prisma.profile.update({
      where: {
        id
      },
      data,
      include: this._include
    })
  }

  async remove(id: number) {
    return this.prisma.profile.delete({
      where: {
        id
      }
    })
  }
}
