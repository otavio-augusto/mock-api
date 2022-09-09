import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export abstract class User {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    name: string

    @Column()
    cpf: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    authType: string
}
