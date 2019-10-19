import {getManager} from "typeorm";
import {Client} from "../entities"

export function retrieveClientFromDB(client_name:string) {
    const entityManager = getManager();
    return entityManager.findOneOrFail(Client,{
        name:client_name
    });
}

export function retrieveAllClientsFromDB() {
    const entityManager = getManager();
    return entityManager.find(Client);
}