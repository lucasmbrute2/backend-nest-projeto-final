import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './model/LoginDto';
import * as bcrypt from "bcrypt"
import { UserPayload } from './model/User.Payload';
import { UserToken } from './model/UserToken';
@Injectable()

//Arquivo criado para comparar a senha que o usuário está digitando, com a senha do Banco de dados.
export class AuthService {
    constructor(private readonly userService: UserService, private readonly jwtService: JwtService) { }
    async login(dto: LoginDto): Promise<UserToken> {
        const user: User = await this.validateUser(dto.email, dto.password)
        const payload: UserPayload = {
            sub: user.id,
            username: user.email
        };
        return {
            accessToken: this.jwtService.sign(payload)
        }
    }
    async validateUser(email: string, password: string): Promise<User> {
        const user: User = await this.userService.findByEmail(email)

        //Caso User seja encontrado no banco, valido se a senha informada foi correta
        if (user) {
            const isPasswordValid = await bcrypt.compare(password, user.password)

            //Se a senha for válida, retornamos o objeto do usuário, sem a senha
            if (isPasswordValid) {
                return {
                    ...user,
                    password: undefined
                }
            }
            //Se sairmos do IF ou não entrarmos, significa q o user não foi encontrado, portanto, enviamos um erro.
            throw new Error('User not found or wrong password')
        }
    };

}
