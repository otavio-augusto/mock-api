import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { join } from "path";
import { DataSource } from "typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
    name: "default",
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "test",
    password: "test",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [
        join(__dirname, '/**/*.entity.{js,ts}')
    ],
    migrations: [
        join(__dirname, '../migrations/*.{js,ts}')
    ]
}

export default new DataSource({
    name: "default",
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "test",
    password: "test",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [
        join(__dirname, '/**/*.entity.{js,ts}')
    ],
    migrations: [
        join(__dirname, '../migrations/*.{js,ts}')
    ]
})
