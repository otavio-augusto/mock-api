import { Product } from "../../product/entities/product.entity"
import { User } from "../../user/entities/user.entity"
import { Entity, Column, ManyToMany, JoinTable } from "typeorm"
import { ApiProperty } from "@nestjs/swagger"

@Entity()
export class Client extends User {

    @Column()
    @ApiProperty({ example: '39613954031', description: 'CPF do Usuário, sem pontuação' })
    telefone: string

    @Column()
    @ApiProperty({ example: 'Rua A, Nº 1, Cidade 1, MG', description: 'Endereço Completo do Usuário' })
    endereco: string

    @ManyToMany(() => Product)
    @JoinTable()
    produtos: Product[]
}
