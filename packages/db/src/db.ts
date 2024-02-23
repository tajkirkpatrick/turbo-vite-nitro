import sqlite from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import * as schema from "./schema";

export const sqliteDB = sqlite("foobar.sqlite");
export const db = drizzle(sqliteDB, { schema });
