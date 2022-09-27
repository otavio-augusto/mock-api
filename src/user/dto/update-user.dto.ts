import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends CreateUserDto {
    @ApiProperty({ example: 'd96cc47e-39db-4771-856a-67d2e43ef2d3', description: "UUID" })
    id: string;
}
