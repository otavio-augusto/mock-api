import { ApiProperty } from "@nestjs/swagger"

export class CreateProductDto {
    @ApiProperty({ examples: ['Leite', 'Pão', 'Café'], description: "Nome de um Produto" })
    titulo: string

    @ApiProperty({ example: 'Pacote com 2, 250g', description: "Descrição de um Produto" })
    descricao: string

    @ApiProperty({ example: 9.99, description: "Valor Unitário de um Produto" })
    valor: number

    @ApiProperty({ example: 100, description: "Quantidade de um Produto em Estoque" })
    quantidade: number
}
