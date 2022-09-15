import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1663258991726 implements MigrationInterface {
    name = 'CreateTables1663258991726'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "titulo" character varying NOT NULL, "descricao" character varying NOT NULL, "valor" integer NOT NULL, "quantidade" integer NOT NULL, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "cpf" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "authType" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "client" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "cpf" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "authType" character varying NOT NULL, "telefone" character varying NOT NULL, "endereco" character varying NOT NULL, CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "theme" ("id" SERIAL NOT NULL, "primary" character varying NOT NULL, "secondary" character varying NOT NULL, "tertiary" character varying NOT NULL, "alert" character varying NOT NULL, CONSTRAINT "PK_c1934d0b4403bf10c1ab0c18166" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "client_produtos_product" ("clientId" uuid NOT NULL, "productId" uuid NOT NULL, CONSTRAINT "PK_0ceb994ebffe05389ad799287c4" PRIMARY KEY ("clientId", "productId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_5e086c287f7c804a963e9da85a" ON "client_produtos_product" ("clientId") `);
        await queryRunner.query(`CREATE INDEX "IDX_411b101442db245c4b5d8e79cc" ON "client_produtos_product" ("productId") `);
        await queryRunner.query(`ALTER TABLE "client_produtos_product" ADD CONSTRAINT "FK_5e086c287f7c804a963e9da85a2" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "client_produtos_product" ADD CONSTRAINT "FK_411b101442db245c4b5d8e79cce" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client_produtos_product" DROP CONSTRAINT "FK_411b101442db245c4b5d8e79cce"`);
        await queryRunner.query(`ALTER TABLE "client_produtos_product" DROP CONSTRAINT "FK_5e086c287f7c804a963e9da85a2"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_411b101442db245c4b5d8e79cc"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_5e086c287f7c804a963e9da85a"`);
        await queryRunner.query(`DROP TABLE "client_produtos_product"`);
        await queryRunner.query(`DROP TABLE "theme"`);
        await queryRunner.query(`DROP TABLE "client"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "product"`);
    }

}
