import {createConnection} from "typeorm";
import {Equipment, Vehicle, Order, Client} from "./entities";

export default async function establishDB() {
    await createConnection({
      type: "sqljs",
      synchronize: true,
      autoSave: true,
      entities: [Order,Client,Vehicle,Equipment],
      logging: true,
      logger: "advanced-console",
      location: "core-db"
    });
}