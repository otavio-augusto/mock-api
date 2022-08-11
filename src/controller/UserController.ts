import { NextFunction, Request, Response } from "express"
import { User } from "../entity/User"
import { AppDataSource } from "../data-source"

export class UserController {

    private userRepository = AppDataSource.getRepository(User)

    async all(_request: Request, response: Response, _next: NextFunction) {
        console.log("USERS: GET: ALL")
        const results = (await this.userRepository.find())
        console.log(results)
        response.status(201).json(results)
    }

    async one(request: Request, response: Response, _next: NextFunction) {
        console.log("USERS: GET: ONE")
        const results = await this.userRepository.findOneBy({ id: request.params.id })
        console.log(results)
        response.status(201).json(results)
    }

    async save(request: Request, response: Response, _next: NextFunction) {
        console.log("USERS: PUT")
        await this.userRepository.save(request.body)
        response.status(201).send("OK")
    }

    async modify(request: Request, response: Response, _next: NextFunction) {
        console.log("USERS: POST")
        await this.userRepository.update(request.body.id, request.body)
        response.status(201).send("OK")
    }

    async remove(request: Request, response: Response, _next: NextFunction) {
        let userToRemove = await this.userRepository.findOneBy({ id: request.params.id })
        await this.userRepository.remove(userToRemove)
        response.status(201).send("OK")
    }

}
