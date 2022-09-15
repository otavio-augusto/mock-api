import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Theme {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    primary: string

    @Column()
    secondary: string

    @Column()
    tertiary: string

    @Column()
    alert: string
}
