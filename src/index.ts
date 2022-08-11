import * as express from "express"
import * as bodyParser from "body-parser"
import { Request, Response } from "express"
import { AppDataSource } from "./data-source"
import { Routes } from "./routes"

const app = createApp()
startDataSources()
addRoutes()

function createApp() {
    const app = express()
    app.use(bodyParser.json())

    app.use(function (req: Request, res: Response, next: () => void) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        next();
    });

    return app
};

async function startDataSources() {
    try {
        await AppDataSource.initialize().then(() => console.log("START: SERVER: Iniciado"))
        //TODO Inicializar todos dataSources
    } catch (err) {
        console.log(err)
    }
    app.listen(3000)
    console.log("START: SERVER: Ouvido em :3000")
};

function addRoutes() {
    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next)
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined)

            } else if (result !== null && result !== undefined) {
                res.json(result)
            }
        })
    })
}
