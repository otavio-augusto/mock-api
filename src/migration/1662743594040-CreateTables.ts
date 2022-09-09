import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1662743594040 implements MigrationInterface {
        name = 'CreateTables1662743594040'

        public async up(queryRunner: QueryRunner): Promise<void> {
                await queryRunner.query(`CREATE TABLE "cliente_produtos_produto" ("clienteId" uuid NOT NULL, "produtoId" uuid NOT NULL, CONSTRAINT "PK_937d2c6a72de79953be40d21e0b" PRIMARY KEY ("clienteId", "produtoId"))`);
                await queryRunner.query(`CREATE INDEX "IDX_8cd9bce9e1ac682b4c4f66cd56" ON "cliente_produtos_produto" ("clienteId") `);
                await queryRunner.query(`CREATE INDEX "IDX_44b282ee52a4ec03f3cb6a9acf" ON "cliente_produtos_produto" ("produtoId") `);
                await queryRunner.query(`ALTER TABLE "produto" DROP CONSTRAINT "PK_1ee475e1c0c0c57083eb59ce1c9"`);
                await queryRunner.query(`ALTER TABLE "produto" DROP COLUMN "registro"`);
                await queryRunner.query(`ALTER TABLE "cliente" ADD "authType" character varying NOT NULL`);
                await queryRunner.query(`ALTER TABLE "produto" ADD "id" uuid NOT NULL DEFAULT u otuid_generate_v4()`);
                await queryRunner.query(`ALTER TABLE "produto" ADD CONSTRAINT "PK_99c4351f9168c50c0736e6a66be" PRIMARY KEY ("id")`);
                await queryRunner.query(`ALTER TABLE "theme" DROP COLUMN "id"`);
                await queryRunner.query(`ALTER TABLE "theme" ADD "id" SERIAL NOT NULL`);
                await queryRunner.query(`ALTER TABLE "theme" ADD CONSTRAINT "PK_c1934d0b4403bf10c1ab0c18166" PRIMARY KEY ("id")`);
                await queryRunner.query(`ALTER TABLE "theme" DROP COLUMN "primary"`);
                await queryRunner.query(`ALTER TABLE "theme" ADD "primary" character varying NOT NULL`);
                await queryRunner.query(`ALTER TABLE "theme" DROP COLUMN "secondary"`);
                await queryRunner.query(`ALTER TABLE "theme" ADD "secondary" character varying NOT NULL`);
                await queryRunner.query(`ALTER TABLE "theme" DROP COLUMN "tertiary"`);
                await queryRunner.query(`ALTER TABLE "theme" ADD "tertiary" character varying NOT NULL`);
                await queryRunner.query(`ALTER TABLE "theme" DROP COLUMN "alert"`);
                await queryRunner.query(`ALTER TABLE "theme" ADD "alert" character varying NOT NULL`);
                await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "name"`);
                await queryRunner.query(`ALTER TABLE "user" ADD "name" character varying NOT NULL`);
                await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "user_un"`);
                await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "cpf"`);
                await queryRunner.query(`ALTER TABLE "user" ADD "cpf" character varying NOT NULL`);
                await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "email"`);
                await queryRunner.query(`ALTER TABLE "user" ADD "email" character varying NOT NULL`);
                await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
                await queryRunner.query(`ALTER TABLE "user" ADD "password" character varying NOT NULL`);
                await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "authType" DROP DEFAULT`);
                await queryRunner.query(`ALTER TABLE "cliente" DROP COLUMN "name"`);
                await queryRunner.query(`ALTER TABLE "cliente" ADD "name" character varying NOT NULL`);
                await queryRunner.query(`ALTER TABLE "cliente" DROP COLUMN "cpf"`);
                await queryRunner.query(`ALTER TABLE "cliente" ADD "cpf" character varying NOT NULL`);
                await queryRunner.query(`ALTER TABLE "cliente" DROP COLUMN "email"`);
                await queryRunner.query(`ALTER TABLE "cliente" ADD "email" character varying NOT NULL`);
                await queryRunner.query(`ALTER TABLE "cliente" DROP COLUMN "password"`);
                await queryRunner.query(`ALTER TABLE "cliente" ADD "password" character varying NOT NULL`);
                await queryRunner.query(`ALTER TABLE "cliente" DROP COLUMN "telefone"`);
                await queryRunner.query(`ALTER TABLE "cliente" ADD "telefone" character varying NOT NULL`);
                await queryRunner.query(`ALTER TABLE "cliente" DROP COLUMN "endereco"`);
                await queryRunner.query(`ALTER TABLE "cliente" ADD "endereco" character varying NOT NULL`);
                await queryRunner.query(`ALTER TABLE "produto" DROP COLUMN "titulo"`);
                await queryRunner.query(`ALTER TABLE "produto" ADD "titulo" character varying NOT NULL`);
                await queryRunner.query(`ALTER TABLE "produto" DROP COLUMN "descricao"`);
                await queryRunner.query(`ALTER TABLE "produto" ADD "descricao" character varying NOT NULL`);
                await queryRunner.query(`ALTER TABLE "produto" DROP COLUMN "valor"`);
                await queryRunner.query(`ALTER TABLE "produto" ADD "valor" integer NOT NULL`);
                await queryRunner.query(`ALTER TABLE "produto" DROP COLUMN "quantidade"`);
                await queryRunner.query(`ALTER TABLE "produto" ADD "quantidade" integer NOT NULL`);
                await queryRunner.query(`ALTER TABLE "cliente_produtos_produto" ADD CONSTRAINT "FK_8cd9bce9e1ac682b4c4f66cd56f" FOREIGN KEY ("clienteId") REFERENCES "cliente"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
                await queryRunner.query(`ALTER TABLE "cliente_produtos_produto" ADD CONSTRAINT "FK_44b282ee52a4ec03f3cb6a9acf5" FOREIGN KEY ("produtoId") REFERENCES "produto"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        }

        public async down(queryRunner: QueryRunner): Promise<void> {
                await queryRunner.query(`ALTER TABLE "cliente_produtos_produto" DROP CONSTRAINT "FK_44b282ee52a4ec03f3cb6a9acf5"`);
                await queryRunner.query(`ALTER TABLE "cliente_produtos_produto" DROP CONSTRAINT "FK_8cd9bce9e1ac682b4c4f66cd56f"`);
                await queryRunner.query(`ALTER TABLE "produto" DROP COLUMN "quantidade"`);
                await queryRunner.query(`ALTER TABLE "produto" ADD "quantidade" numeric NOT NULL`);
                await queryRunner.query(`ALTER TABLE "produto" DROP COLUMN "valor"`);
                await queryRunner.query(`ALTER TABLE "produto" ADD "valor" numeric NOT NULL`);
                await queryRunner.query(`ALTER TABLE "produto" DROP COLUMN "descricao"`);
                await queryRunner.query(`ALTER TABLE "produto" ADD "descricao" character varying(200) NOT NULL`);
                await queryRunner.query(`ALTER TABLE "produto" DROP COLUMN "titulo"`);
                await queryRunner.query(`ALTER TABLE "produto" ADD "titulo" character varying(200) NOT NULL`);
                await queryRunner.query(`ALTER TABLE "cliente" DROP COLUMN "endereco"`);
                await queryRunner.query(`ALTER TABLE "cliente" ADD "endereco" character varying(200) NOT NULL`);
                await queryRunner.query(`ALTER TABLE "cliente" DROP COLUMN "telefone"`);
                await queryRunner.query(`ALTER TABLE "cliente" ADD "telefone" character varying(200) NOT NULL`);
                await queryRunner.query(`ALTER TABLE "cliente" DROP COLUMN "password"`);
                await queryRunner.query(`ALTER TABLE "cliente" ADD "password" character varying(200) NOT NULL`);
                await queryRunner.query(`ALTER TABLE "cliente" DROP COLUMN "email"`);
                await queryRunner.query(`ALTER TABLE "cliente" ADD "email" character varying(200) NOT NULL`);
                await queryRunner.query(`ALTER TABLE "cliente" DROP COLUMN "cpf"`);
                await queryRunner.query(`ALTER TABLE "cliente" ADD "cpf" character varying(200) NOT NULL`);
                await queryRunner.query(`ALTER TABLE "cliente" DROP COLUMN "name"`);
                await queryRunner.query(`ALTER TABLE "cliente" ADD "name" character varying(200) NOT NULL`);
                await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "authType" SET DEFAULT USER`);
                await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
                await queryRunner.query(`ALTER TABLE "user" ADD "password" character varying(200) NOT NULL`);
                await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "email"`);
                await queryRunner.query(`ALTER TABLE "user" ADD "email" character varying(200) NOT NULL`);
                await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "cpf"`);
                await queryRunner.query(`ALTER TABLE "user" ADD "cpf" character varying(200) NOT NULL`);
                await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "user_un" UNIQUE ("cpf")`);
                await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "name"`);
                await queryRunner.query(`ALTER TABLE "user" ADD "name" character varying(200) NOT NULL`);
                await queryRunner.query(`ALTER TABLE "theme" DROP COLUMN "alert"`);
                await queryRunner.query(`ALTER TABLE "theme" ADD "alert" character varying(200) NOT NULL`);
                await queryRunner.query(`ALTER TABLE "theme" DROP COLUMN "tertiary"`);
                await queryRunner.query(`ALTER TABLE "theme" ADD "tertiary" character varying(200) NOT NULL`);
                await queryRunner.query(`ALTER TABLE "theme" DROP COLUMN "secondary"`);
                await queryRunner.query(`ALTER TABLE "theme" ADD "secondary" character varying(200) NOT NULL`);
                await queryRunner.query(`ALTER TABLE "theme" DROP COLUMN "primary"`);
                await queryRunner.query(`ALTER TABLE "theme" ADD "primary" character varying(200) NOT NULL`);
                await queryRunner.query(`ALTER TABLE "theme" DROP CONSTRAINT "PK_c1934d0b4403bf10c1ab0c18166"`);
                await queryRunner.query(`ALTER TABLE "theme" DROP COLUMN "id"`);
                await queryRunner.query(`ALTER TABLE "theme" ADD "id" character varying(200) NOT NULL`);
                await queryRunner.query(`ALTER TABLE "produto" DROP CONSTRAINT "PK_99c4351f9168c50c0736e6a66be"`);
                await queryRunner.query(`ALTER TABLE "produto" DROP COLUMN "id"`);
                await queryRunner.query(`ALTER TABLE "cliente" DROP COLUMN "authType"`);
                await queryRunner.query(`ALTER TABLE "produto" ADD "registro" uuid NOT NULL DEFAULT uuid_generate_v4()`);
                await queryRunner.query(`ALTER TABLE "produto" ADD CONSTRAINT "PK_1ee475e1c0c0c57083eb59ce1c9" PRIMARY KEY ("registro")`);
                await queryRunner.query(`DROP INDEX "public"."IDX_44b282ee52a4ec03f3cb6a9acf"`);
                await queryRunner.query(`DROP INDEX "public"."IDX_8cd9bce9e1ac682b4c4f66cd56"`);
                await queryRunner.query(`DROP TABLE "cliente_produtos_produto"`);
        }

}
