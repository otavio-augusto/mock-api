import { ApiProperty } from "@nestjs/swagger"
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Theme {

    @PrimaryGeneratedColumn()
    @ApiProperty({ example: 1, description: "ID Numérico" })
    id: number

    @Column()
    @ApiProperty({ example: ['#2E3440', '#3B4252', '#434C5E'], description: "Hexadecimal de uma cor" })
    primary: string

    @Column()
    @ApiProperty({ example: ['#2E3440', '#3B4252', '#434C5E'], description: "Hexadecimal de uma cor" })
    secondary: string

    @Column()
    @ApiProperty({ example: ['#2E3440', '#3B4252', '#434C5E'], description: "Hexadecimal de uma cor" })
    tertiary: string

    @Column()
    @ApiProperty({ example: ['#2E3440', '#3B4252', '#434C5E'], description: "Hexadecimal de uma cor" })
    alert: string
}
