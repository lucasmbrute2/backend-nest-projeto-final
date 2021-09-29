import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) { }

  create(data: CreateUserDto) {
    return this.prisma.user.create({
      data
    })
  }

  findAll() {
    return this.prisma.user.findMany({
      include: {
        profiles: true
      }
    })
  }

  findOne(id: number) {
    return this.prisma.user.findMany({
      where: {
        id
      }, include: {
        profiles: true
      }
    })
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
