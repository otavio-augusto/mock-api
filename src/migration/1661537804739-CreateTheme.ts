import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTheme1661537804739 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "theme",
                columns: [
                    {
                        name: "id",
                        type: "varchar(200)",
                    },
                    {
                        name: "primary",
                        type: "varchar(200)"
                    },
                    {
                        name: "secondary",
                        type: "varchar(200)"
                    },
                    {
                        name: "tertiary",
                        type: "varchar(200)"
                    },
                    {
                        name: "alert",
                        type: "varchar(200)"
                    },
                ]
            })
        );
    }

    public async down(_queryRunner: QueryRunner): Promise<void> {
    }

}
