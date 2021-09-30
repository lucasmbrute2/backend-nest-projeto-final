import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfileService {
  constructor(private prisma: PrismaService) { }

  private readonly _include = {
    user: true
  }
  create(data: CreateProfileDto) {
    return this.prisma.profiles.create({
      data,
      include: this._include
    })
  }

  findAll() {
    return this.prisma.profiles.findMany({
      include: this._include
    })
  }

  findOne(id: number) {
    return this.prisma.profiles.findUnique({
      where: {
        id
      },
      include: this._include
    })
  }

  update(id: number, data: UpdateProfileDto) {
    return this.prisma.profiles.update({
      where: {
        id
      },
      data,
      include: this._include
    })
  }

  remove(id: number) {
    return `This action removes a #${id} profile`;
  }
}
