import { ApiProperty } from "@nestjs/swagger";
import { AuthType } from "../entities/user.entity";

export class CreateUserDto {
    @ApiProperty({ example: 'Adebaldo', description: 'Nome do Usuário' })
    name: string;

    @ApiProperty({ example: '39613954031', description: 'CPF do Usuário, sem pontuação' })
    cpf: string;

    @ApiProperty({ example: 'adebaldo@email.com', description: 'Email do Usuário' })
    email: string;

    @ApiProperty({ example: 'p4ssw0rd', description: 'Senha do Usuário' })
    password: string;

    @ApiProperty({ enum: AuthType, description: 'Nível de Autorização do Usuário' })
    authType: AuthType;
}
