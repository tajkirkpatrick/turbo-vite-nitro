import sqlite from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
// import { migrate } from "drizzle-orm/better-sqlite3/migrator";

import * as schema from "./schema";

const sqliteDB = sqlite("foobar.sqlite");
export const db = drizzle(sqliteDB, { schema });

// migrate(db, {
//   migrationsFolder:
//     "C:\\Users\\USER\\Documents\\source\\repos\\turbo-vite-nitro\\packages\\db\\migrations",
// });

// sqliteDB.close();
