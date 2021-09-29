import { Injectable } from '@nestjs/common';
import { profile } from 'console';
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

  findOne(id: number) {
    return this.prisma.user.findMany({
      where: {
        id
      }, include: this._include
    })
  }

  update(id: number, data: UpdateUserDto) {
    return this.prisma.user.update({
      where: {
        id,
      },
      data,
      include: this._include
    })
  }

  remove(id: number) {
    return this.prisma.user.delete({
      where: {
        id
      }
    })
  }
}
