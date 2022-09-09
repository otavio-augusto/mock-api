import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1662743805224 implements MigrationInterface {
    name = 'CreateTables1662743805224'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "produto" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "titulo" character varying NOT NULL, "descricao" character varying NOT NULL, "valor" integer NOT NULL, "quantidade" integer NOT NULL, CONSTRAINT "PK_99c4351f9168c50c0736e6a66be" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "cpf" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "authType" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cliente" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "cpf" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "authType" character varying NOT NULL, "telefone" character varying NOT NULL, "endereco" character varying NOT NULL, CONSTRAINT "PK_18990e8df6cf7fe71b9dc0f5f39" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "theme" ("id" SERIAL NOT NULL, "primary" character varying NOT NULL, "secondary" character varying NOT NULL, "tertiary" character varying NOT NULL, "alert" character varying NOT NULL, CONSTRAINT "PK_c1934d0b4403bf10c1ab0c18166" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cliente_produtos_produto" ("clienteId" uuid NOT NULL, "produtoId" uuid NOT NULL, CONSTRAINT "PK_937d2c6a72de79953be40d21e0b" PRIMARY KEY ("clienteId", "produtoId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_8cd9bce9e1ac682b4c4f66cd56" ON "cliente_produtos_produto" ("clienteId") `);
        await queryRunner.query(`CREATE INDEX "IDX_44b282ee52a4ec03f3cb6a9acf" ON "cliente_produtos_produto" ("produtoId") `);
        await queryRunner.query(`ALTER TABLE "cliente_produtos_produto" ADD CONSTRAINT "FK_8cd9bce9e1ac682b4c4f66cd56f" FOREIGN KEY ("clienteId") REFERENCES "cliente"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "cliente_produtos_produto" ADD CONSTRAINT "FK_44b282ee52a4ec03f3cb6a9acf5" FOREIGN KEY ("produtoId") REFERENCES "produto"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cliente_produtos_produto" DROP CONSTRAINT "FK_44b282ee52a4ec03f3cb6a9acf5"`);
        await queryRunner.query(`ALTER TABLE "cliente_produtos_produto" DROP CONSTRAINT "FK_8cd9bce9e1ac682b4c4f66cd56f"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_44b282ee52a4ec03f3cb6a9acf"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_8cd9bce9e1ac682b4c4f66cd56"`);
        await queryRunner.query(`DROP TABLE "cliente_produtos_produto"`);
        await queryRunner.query(`DROP TABLE "theme"`);
        await queryRunner.query(`DROP TABLE "cliente"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "produto"`);
    }

}
