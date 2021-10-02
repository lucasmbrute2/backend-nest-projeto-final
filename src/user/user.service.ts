import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) { }

  private readonly _include = {
    profiles: true
  }

  create(data: CreateUserDto) {
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

  async update(id: number, data: UpdateUserDto) {
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
