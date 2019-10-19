import {getManager} from "typeorm";
import { RootObject } from "../contexts";
import { Order, Equipment,Client,Vehicle } from "../entities";

export async function loadOrder(appointmentID:number,form:RootObject,setForm:React.Dispatch<React.SetStateAction<RootObject>>) {
    const order = await getManager().findOne(Order,appointmentID,{
        relations:["client","vehicle","equipment"]
    });
    const equipment = order.equipment.map(eq => {
        return {id:eq.id,label:`${eq.equipment_name} (${eq.cost})`};
    });
    setForm({
        ...form,
        appointmentID:appointmentID,
        createdDate:order.created_date,
        appointmentDate:order.appointment_date,
        client: {
            client_name:order.client.name,
            ssn:order.client.ssn,
            address:order.client.address,
            phone:order.client.phone_number
        },
        vehicle: {
            license:order.vehicle.license_plate_no,
            ttno:order.vehicle.tow_truck_no,
            vin:order.vehicle.vin,
            year:order.vehicle.year_of_manufacture
        },
        service:order.service,
        status:{value:order.status, label: order.status.toUpperCase()},
        selectedItems: equipment,
        total:order.total
    });
}

export async function saveOrder(form:RootObject) {
    const entityManager = getManager();
    const equipment_ids = form.selectedItems.map(item => item.id);
    const client = new Client();
    client.name = form.client.client_name;
    client.address = form.client.address;
    client.ssn = form.client.ssn;
    client.phone_number = form.client.phone;
    await client.save();
    const vehicle = new Vehicle();
    vehicle.license_plate_no = form.vehicle.license;
    vehicle.tow_truck_no = form.vehicle.ttno;
    vehicle.vin = form.vehicle.vin;
    vehicle.year_of_manufacture = form.vehicle.year;
    await vehicle.save();
    let order:Order
    if(form.appointmentID) {
        order = await entityManager.findOne(Order,form.appointmentID,{
            relations:["client","vehicle","equipment"]
        });
    }
    else {
        order = new Order();
    }
    order.created_date = form.createdDate as Date;
    order.appointment_date = form.appointmentDate as Date;
    order.client = client;
    order.vehicle = vehicle;
    order.service = form.service;
    order.status = form.status.value;
    order.equipment = await entityManager.findByIds(Equipment,equipment_ids);
    order.total = form.total;
    await order.save();
    return order.id;
}

export async function logAllEntries() {
    const orders = await getManager().find(Order);
    orders.forEach(order => {
        console.group("Order:");
        console.log(order);
        console.groupEnd();
    })
}

export async function retrieveAllOrdersFromDB() {
    return getManager().find(Order);
}

export function retrieveAllOrdersWithClientFromDB() {
    return getManager().find(Order,{
        relations:["client"]
    });
}