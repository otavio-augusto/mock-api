import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) { }

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.userService.findOneByEmail(username);
        if (user && user.password === pass)
            if (user.authType === 'admin') {
                delete user.name;
                delete user.cpf;
                delete user.password;
                return user
            }
        return false
    }

    async generateAuth(user: any) {
        const payload = { username: user.email, id: user.id }
        return {
            acess_token: this.jwtService.sign(payload)
        }
    }
}
