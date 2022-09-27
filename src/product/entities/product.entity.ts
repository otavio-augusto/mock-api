import { Client } from "../../client/entities/client.entity"
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from "typeorm"
import { ApiProperty } from "@nestjs/swagger"

@Entity()
export class Product {
    @PrimaryGeneratedColumn("uuid")
    @ApiProperty({ example: 1, description: "UUID" })
    id: string

    @Column()
    @ApiProperty({ examples: ['Leite', 'Pão', 'Café'], description: "Nome de um Produto" })
    titulo: string

    @Column()
    @ApiProperty({ example: 'Pacote com 2, 250g', description: "Descrição de um Produto" })
    descricao: string

    @Column()
    @ApiProperty({ example: 9.99, description: "Valor Unitário de um Produto" })
    valor: number

    @Column()
    @ApiProperty({ example: 100, description: "Quantidade de um Produto em Estoque" })
    quantidade: number

    @ManyToMany(() => Client)
    clientes: Client[]
}
