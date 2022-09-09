import { NextFunction, Request, Response } from "express"
import { sign, verify } from "jsonwebtoken"
import { UserController } from "../controller/UserController"
require('dotenv').config({ path: './.env' });

export class AuthHandler {
    static readonly secret = process.env.SECRET;
    async generateAuth(request: Request, response: Response, _next: NextFunction) {
        const { email, password } = request.body;
        const user = await userExists(email, password)
        if (!user) {
            response.status(401).send()
        } else {
            console.log("ELSE")
            const token = sign(
                { userEmail: email, userPassword: password, authLevel: user.authType },
                AuthHandler.secret,
                { expiresIn: "24h" }
            )
            response.cookie('JWTtoken', token, {
                maxAge: 86400 * 1000, // 24h
                httpOnly: true,
                secure: true
            });

            response.status(200).send()
        }
    }

    validateAuth(request: Request, response: Response, _next: NextFunction) {
        const token = request.headers.cookie.split('=')[1];
        const decoded = verify(token, AuthHandler.secret)
        if (decoded)
            return response.status(200).json(decoded)
        response.status(401).send()
    }

    clearAuth(_request: Request, response: Response, _next: NextFunction) {
        response.clearCookie('JWTtoken')
        response.status(205).send()
    }
}

export function validateAuth(token: any) {
    const decoded = verify(token, AuthHandler.secret)
    console.log(decoded)
};

const userExists = async (userEmail: string, userPassword: string) => {
    const user = await new UserController().login(userEmail)
    console.log(user)
    if (user != null && user.password === userPassword)
        return user
    return null
}
