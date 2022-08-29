import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateUser1661343023265 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`)
        await queryRunner.createTable(
            new Table({
                name: "user",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy: "uuid",
                        default: "uuid_generate_v4()"
                    },
                    {
                        name: "name",
                        type: "varchar(200)"
                    },
                    {
                        name: "email",
                        type: "varchar(200)"
                    },
                    {
                        name: "password",
                        type: "varchar(200)"
                    },
                ]
            })
        );
    }

    public async down(_queryRunner: QueryRunner): Promise<void> {
    }

}
