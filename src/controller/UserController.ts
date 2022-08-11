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

    async save(request: Request, _response: Response, _next: NextFunction) {
        console.log("USERS: PUT")
        return await this.userRepository.save(request.body)
    }

    async modify(request: Request, _response: Response, _next: NextFunction) {
        console.log("USERS: POST")
        return await this.userRepository.update(request.body.id, request.body)
    }

    async remove(request: Request, _response: Response, _next: NextFunction) {
        console.log("USERS: DELETE")
        let userToRemove = await this.userRepository.findOneBy({ id: request.params.id })
        await this.userRepository.remove(userToRemove)
    }

}
