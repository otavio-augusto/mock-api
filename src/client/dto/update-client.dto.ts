import { ApiProperty } from '@nestjs/swagger';
import { CreateClientDto } from './create-client.dto';

export class UpdateClientDto extends CreateClientDto {
    @ApiProperty({ example: 'd96cc47e-39db-4771-856a-67d2e43ef2d3', description: "UUID" })
    id: string;
}
