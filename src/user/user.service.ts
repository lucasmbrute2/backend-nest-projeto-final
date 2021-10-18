import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from "bcrypt"
@Injectable()
//O service é onde de fato todo o trabalho "pesado acontece."
export class UserService {
  constructor(private prisma: PrismaService) { }

  private readonly _include = {
    profile: true
  }

  async create(dto: CreateUserDto) {
    const data: Prisma.UserCreateInput = {
      ...dto,
      password: await bcrypt.hash(dto.password, 10),
      profile: {
        create: dto.profile
      }
    }

    const createdUser = await this.prisma.user.create({
      data,
      include: this._include
    })
    return {
      ...createdUser,
      password: undefined
    }

  }

  findAll() {
    return this.prisma.user.findMany({
      include: this._include
    })
  }

  async findById(id: number) {
    return this.prisma.user.findUnique({
      where: {
        id
      },
      include: this._include,
      rejectOnNotFound: true
    })
  }

  findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } })
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
