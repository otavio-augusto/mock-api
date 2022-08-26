import "reflect-metadata"
import { DataSource } from "typeorm"

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
    entities: ['src/entities/*.{js,ts}'],
    migrations: ['src/migration/*.ts'],
    subscribers: ['src/subscribers/*.ts'],
})
