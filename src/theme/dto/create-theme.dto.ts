import { ApiProperty } from "@nestjs/swagger";

export class CreateThemeDto {
    @ApiProperty({ example: ['#2E3440', '#3B4252', '#434C5E'], description: "Hexadecimal de uma cor" })
    primary: string;
    @ApiProperty({ example: ['#2E3440', '#3B4252', '#434C5E'], description: "Hexadecimal de uma cor" })
    secondary: string;
    @ApiProperty({ example: ['#2E3440', '#3B4252', '#434C5E'], description: "Hexadecimal de uma cor" })
    tertiary: string;
    @ApiProperty({ example: ['#2E3440', '#3B4252', '#434C5E'], description: "Hexadecimal de uma cor" })
    alert: string;
}
