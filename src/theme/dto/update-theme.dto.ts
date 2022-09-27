import { ApiProperty } from '@nestjs/swagger';
import { CreateThemeDto } from './create-theme.dto';

export class UpdateThemeDto extends CreateThemeDto {
    @ApiProperty({ example: 1, description: "ID Numérico" })
    id: number;
}
