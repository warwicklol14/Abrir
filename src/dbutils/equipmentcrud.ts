import {getManager} from "typeorm";
import {Equipment} from "../entities"

export function saveEquipmentToDB(equipment_name:string,cost:number) {
    const entityManager = getManager();
    return entityManager.insert(Equipment,{
        equipment_name: equipment_name,
        cost:cost
    });
}

export function retrieveEquipmentFromDB(equipment_name:string) {
    const entityManager = getManager();
    return entityManager.findOneOrFail(Equipment,{
        equipment_name: equipment_name
    });
}

export function updateEquipmentInDB(id:number,equipment_name:string,cost:number) {
    const entityManager = getManager();
    return entityManager.update(Equipment,id,{
        equipment_name:equipment_name,
        cost: cost
    });
}

export async function removeEquipmentFromDB(id:number) {
    const entityManager = getManager();
    const equipment = await entityManager.findOne(Equipment,id);
    equipment.remove();
}

export function retrieveAllEquipmentFromDB() {
    const entityManager = getManager();
    return entityManager.find(Equipment);
}

export async function logAllEquipment() {
    const entityManager = getManager();
    for (let eq of await entityManager.find(Equipment)) {
        console.log(eq);
    }
}