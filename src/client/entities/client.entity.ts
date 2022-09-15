import { Product } from "../../product/entities/product.entity"
import { User } from "../../user/entities/user.entity"
import { Entity, Column, ManyToMany, JoinTable } from "typeorm"

@Entity()
export class Client extends User {

    @Column()
    telefone: string

    @Column()
    endereco: string

    @ManyToMany(() => Product)
    @JoinTable()
    produtos: Product[]
}
