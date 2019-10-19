import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity()
export class Equipment extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    equipment_name: string;

    @Column()
    cost: number;

}