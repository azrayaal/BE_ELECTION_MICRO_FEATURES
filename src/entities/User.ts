import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    fullName: string

    @Column()
    email: string

    @Column()
    address: string

    @Column()
    gender: string

    @Column()
    userName: string

    @Column()
    password: string

}
