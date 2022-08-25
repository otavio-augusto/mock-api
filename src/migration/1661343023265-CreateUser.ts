import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateUser1661343023265 implements MigrationInterface {
    name?: string;

    public async up(queryRunner: QueryRunner): Promise<void> {
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

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
