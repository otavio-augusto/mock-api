import { Entity, Column, ManyToMany, JoinTable } from "typeorm"
import { Produto } from "./Produto"
import { User } from "./User"

@Entity()
export class Cliente extends User {

    @Column()
    telefone: string

    @Column()
    endereco: string

    @ManyToMany(() => Produto)
    @JoinTable()
    produtos: Produto[]
}
