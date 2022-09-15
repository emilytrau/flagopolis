import { JSONDatabase } from "./json/mod.ts";
import { DatabaseConnector } from "./interface.ts";

const connector: DatabaseConnector = new JSONDatabase();
export default connector;
