import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdatePostTable1704239259853 implements MigrationInterface {
    name = 'UpdatePostTable1704239259853'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "article" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "image" character varying, "date" TIMESTAMP NOT NULL, "author" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_40808690eb7b915046558c0f81b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "candidate" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "image" character varying, "number" integer NOT NULL, "vision_mission" character varying NOT NULL, CONSTRAINT "PK_b0ddec158a9a60fbc785281581b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "fullName" character varying NOT NULL, "email" character varying NOT NULL, "address" character varying NOT NULL, "gender" character varying NOT NULL, "userName" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "party" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "image" character varying, "chairman" character varying NOT NULL, "vision_mission" character varying NOT NULL, "address" character varying NOT NULL, CONSTRAINT "PK_e6189b3d533e140bb33a6d2cec1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "voter" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "vote" character varying NOT NULL, CONSTRAINT "PK_c1a0d8fd992c199219325d43705" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "voter"`);
        await queryRunner.query(`DROP TABLE "party"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "candidate"`);
        await queryRunner.query(`DROP TABLE "article"`);
    }

}
