import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { Public } from './auth.decorator';
import { AuthService } from './auth.service';
import { LoginDto } from './model/LoginDto';

@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Public()
    @Post('login')
    @HttpCode(HttpStatus.OK)
    login(@Body() dto: LoginDto) {
        return this.authService.login(dto)
    }
}
