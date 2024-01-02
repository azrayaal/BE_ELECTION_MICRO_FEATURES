import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Party {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    banner_party: string

    @Column()
    chairman: string

    @Column()
    vision_mission: string

    @Column()
    address: string

}
