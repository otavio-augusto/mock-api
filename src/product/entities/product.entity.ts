import { Client } from "../../client/entities/client.entity"
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from "typeorm"

@Entity()
export class Product {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    titulo: string

    @Column()
    descricao: string

    @Column()
    valor: number

    @Column()
    quantidade: number

    @ManyToMany(() => Client)
    clientes: Client[]
}
