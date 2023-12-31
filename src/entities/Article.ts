import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Article {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column({ nullable: true})
    image: string

    @Column()
    date: Date

    @Column()
    author: string

    @Column()
    description: string

}
