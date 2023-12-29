import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class News {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    date: string

    @Column()
    author: string

    @Column()
    description: string

}
