import { ApiProperty } from "@nestjs/swagger"
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

export enum AuthType {
    Admin = 'admin',
    User = 'user'
}

@Entity()
export class User {
    @ApiProperty({ example: 'd96cc47e-39db-4771-856a-67d2e43ef2d3', description: "UUID" })
    @PrimaryGeneratedColumn("uuid")
    id: string

    @ApiProperty({ example: 'Adebaldo', description: 'Nome do Usuário' })
    @Column()
    name: string

    @ApiProperty({ example: '39613954031', description: 'CPF do Usuário, sem pontuação' })
    @Column()
    cpf: string

    @ApiProperty({ example: 'adebaldo@email.com', description: 'Email do Usuário' })
    @Column()
    email: string

    @ApiProperty({ example: 'p4ssw0rd', description: 'Senha do Usuário' })
    @Column()
    password: string

    @ApiProperty({ enum: AuthType, description: 'Nível de Autorização do Usuário' })
    @Column()
    authType: AuthType
}

