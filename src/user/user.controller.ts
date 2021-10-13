import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpCode, HttpException } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  private readonly _errorReturn = (id: string) => { throw new HttpException('Not Found', 404) }
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id).catch(err => this._errorReturn(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {


    return this.userService.update(+id, updateUserDto).catch(err => this._errorReturn(id));
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.userService.remove(+id).catch(err => this._errorReturn(id));
  }
}
