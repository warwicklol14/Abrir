import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany} from "typeorm";
import { Order } from "./Order";

@Entity()
export class Client extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    ssn: string;

    @Column()
    address: string;

    @Column()
    phone_number: string;

    @OneToMany(type => Order, order => order.client)
    orders: Order[];

}