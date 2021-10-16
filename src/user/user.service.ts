import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from "bcrypt"
@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) { }

  private readonly _include = {
    profile: true
  }

  create(dto: CreateUserDto) {
    const data: Prisma.UserCreateInput = {
      ...dto,
      password: bcrypt,
      profile: {
        create: dto.profile
      }
    }

    return this.prisma.user.create({
      data,
      include: this._include
    })
  }

  findAll() {
    return this.prisma.user.findMany({
      include: this._include
    })
  }

  async findOne(id: number) {
    return this.prisma.user.findUnique({
      where: {
        id
      },
      include: this._include,
      rejectOnNotFound: true
    })
  }

  async update(id: number, dto: UpdateUserDto) {
    const data: Prisma.UserUpdateInput = {
      ...dto,
      profile: {
        upsert: dto.profile.map(updateProfileDto => {
          return {
            where: {
              id: updateProfileDto.id
            },
            update: {
              image: updateProfileDto.image,
              title: updateProfileDto.title
            },
            create: {
              image: updateProfileDto.image,
              title: updateProfileDto.title
            }
          }
        })
      }
    }
    return this.prisma.user.update({
      where: {
        id,
      },
      data,
      include: this._include
    })
  }

  async remove(id: number) {
    return this.prisma.user.delete({
      where: {
        id
      }
    })
  }
}
