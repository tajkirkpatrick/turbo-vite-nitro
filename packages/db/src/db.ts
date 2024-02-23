import sqlite from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import * as schema from "./schema";

export const sqliteDB = sqlite("foobar.sqlite");
sqliteDB.pragma("journal_mode = WAL");

export const db = drizzle(sqliteDB, { schema });
