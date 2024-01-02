import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Candidate {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({nullable: true})
    image: string

    @Column()
    number: Number

    @Column()
    vision_mission: string

}
