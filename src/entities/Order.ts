import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, ManyToMany, JoinTable} from "typeorm";
import { Client,Equipment,Vehicle  } from ".";

@Entity()
export class Order extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("datetime")
    created_date: Date;

    @Column("datetime")
    appointment_date: Date;

    @Column()
    service:string;

    @Column()
    status:string;

    @Column()
    total:number;

    @ManyToOne(type => Client, client => client.orders)
    client: Client;

    @ManyToOne(type => Vehicle)
    vehicle: Vehicle;

    @ManyToMany(type => Equipment)
    @JoinTable()
    equipment: Equipment[];
}