import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from './constants';
import { Request } from 'express';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromExtractors([
                JwtStrategy.validateCookieAuth,
                ExtractJwt.fromAuthHeaderAsBearerToken()
            ]),
            ignoreExpiration: false,
            secretOrKey: jwtConstants.secret,
        });
    }

    async validate(payload: any) {
        return { userId: payload.id, username: payload.username };
    }

    private static validateCookieAuth(request: Request) {
        if (
            request.cookies &&
            'auth-cookie' in request.cookies &&
            request.cookies['auth-cookie'].length > 0
        )
            return request.cookies['auth-cookie']
        return null
    }
}
