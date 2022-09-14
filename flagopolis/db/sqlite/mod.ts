import { Database } from "sqlite3";
import { DatabaseConnector } from "../interface.ts";

export class SQLiteDatabase implements DatabaseConnector {
  db: Database;

  constructor() {
    // This sqlite3 library is synchronous. We'll see if that matters ¯\_(ツ)_/¯
    const dbPath = new URL("db.sqlite3", import.meta.url);
    this.db = new Database(dbPath);
    console.log("SQLite database started");
  }

  start = async () => {};
}
