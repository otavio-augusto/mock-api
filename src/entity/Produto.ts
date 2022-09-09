import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from "typeorm"
import { Cliente } from "./Client"

@Entity()
export class Produto {

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

    @ManyToMany(() => Cliente)
    clientes: Cliente[]
}
