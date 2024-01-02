import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Party {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({ nullable: true})
    image: string

    @Column()
    chairman: string

    @Column()
    vision_mission: string

    @Column()
    address: string

}
