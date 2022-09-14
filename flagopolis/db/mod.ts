import { SQLiteDatabase } from "./sqlite/mod.ts";
import { DatabaseConnector } from "./interface.ts";

const connector: DatabaseConnector = new SQLiteDatabase();
export default connector;
