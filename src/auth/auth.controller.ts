import { Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';

@Controller()
export class AuthController {
    @Post('login')
    @HttpCode(HttpStatus.OK)
    login() { }
}
