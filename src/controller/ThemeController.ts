import { NextFunction, Request, Response } from "express"
import { Theme } from "../entity/Theme"
import { AppDataSource } from "../data-source"

export class ThemeController {

    private themeRepository = AppDataSource.getRepository(Theme)

    async one(request: Request, response: Response, _next: NextFunction) {
        console.log("THEME: GET: ONE")
        const results = await this.themeRepository.findOneBy({ id: request.params.id })
        response.status(201).json(results)
    }

    async save(request: Request, _response: Response, _next: NextFunction) {
        console.log("THEME: PUT")
        return await this.themeRepository.save(request.body)
    }

    async remove(request: Request, _response: Response, _next: NextFunction) {
        console.log("THEME: DELETE")
        let userToRemove = await this.themeRepository.findOneBy({ id: request.params.id })
        await this.themeRepository.remove(userToRemove)
    }

}
