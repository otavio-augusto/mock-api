import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Theme } from "./entity/Theme"

export const AppDataSource = new DataSource({
    name: "default",
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "test",
    password: "test",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [User, Theme],
    migrations: [],
    subscribers: [],
})
