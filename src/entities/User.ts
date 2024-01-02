import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    fullName: string

    @Column()
    address: string

    @Column()
    gender: number

    @Column()
    userName: number

    @Column()
    password: number

}
