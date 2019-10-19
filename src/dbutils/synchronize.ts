import {getManager} from "typeorm";

export function synchronizeDatabase() {
    const entityManager = getManager();
    return entityManager.connection.synchronize(true);
}