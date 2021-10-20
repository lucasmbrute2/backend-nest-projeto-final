import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpCode, HttpException } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CurrentUser } from 'src/decorators/current-user.decorator';
import { User } from './entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  private readonly _errorReturn = (id: number) => { throw new HttpException('Not Found', 404) }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll()
  }

  @Get('jwt')
  currentUser(@CurrentUser() currentUser: User) {
    return currentUser
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.userService.findById(id)//.catch(err => this._errorReturn(id));
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {


    return this.userService.update(id, updateUserDto).catch(err => this._errorReturn(id));
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: number) {
    return this.userService.remove(id).catch(err => this._errorReturn(id));
  }
}
