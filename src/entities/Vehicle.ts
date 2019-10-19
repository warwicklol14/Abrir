import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity()
export class Vehicle extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    license_plate_no: string;

    @Column()
    tow_truck_no: string;

    @Column()
    vin: string;

    @Column()
    year_of_manufacture: string;

}