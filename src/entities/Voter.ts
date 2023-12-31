import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Voter {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    vote: string

}
