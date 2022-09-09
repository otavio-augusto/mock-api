import { NextFunction, Request, Response } from "express"
import { User } from "../entity/User"
import { AppDataSource } from "../data-source"

export class UserController {
    private userRepository = AppDataSource.getRepository(User)

    async all(_request: Request, response: Response, _next: NextFunction) {
        console.log("USERS: GET: ALL")
        const results = (await this.userRepository.find())
        response.status(200).json(results)
    }

    async one(request: Request, response: Response, _next: NextFunction) {
        console.log("USERS: GET: ONE")
        const results = await this.userRepository.findOneBy({ id: request.params.id })
        response.status(200).json(results)
    }

    async save(request: Request, response: Response, _next: NextFunction) {
        console.log("USERS: PUT")
        console.log(request.body)
        await this.userRepository.save(request.body)
        response.status(201).send()
    }

    async modify(request: Request, response: Response, _next: NextFunction) {
        console.log("USERS: POST")
        await this.userRepository.update(request.body.id, request.body)
        response.status(201).send()
    }

    async remove(request: Request, response: Response, _next: NextFunction) {
        console.log("USERS: DELETE")
        let userToRemove = await this.userRepository.findOneBy({ id: request.params.id })
        await this.userRepository.remove(userToRemove)
        response.status(201).send()
    }

    async login(userEmail: string) {
        const user = await this.userRepository.findOneBy({ email: userEmail })
        return user
    }
}
