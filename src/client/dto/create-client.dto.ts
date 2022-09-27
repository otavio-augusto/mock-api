import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";
import { AuthType } from "../../user/entities/user.entity";

export class CreateClientDto {
    @ApiProperty({ example: 'Adebaldo', description: 'Nome do Usuário' })
    name: string;

    @ApiProperty({ example: '39613954031', description: 'CPF do Usuário, sem pontuação' })
    cpf: string;

    @ApiProperty({ example: 'adebaldo@email.com', description: 'Email do Usuário' })
    @IsEmail()
    email: string;

    @ApiProperty({ example: 'p4ssw0rd', description: 'Senha do Usuário' })
    @IsNotEmpty()
    password: string;

    @ApiProperty({ enum: AuthType, description: 'Nível de Autorização do Usuário' })
    authType: AuthType;

    @ApiProperty({ examples: ['11836467859', '31355732077'], description: 'Telefone do Usuário, sem pontuação' })
    telefone: string;

    @ApiProperty({ example: 'Rua A, Nº 1, Cidade 1, MG', description: 'Endereço Completo do Usuário' })
    endereco: string;
}
