import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import { db, sqliteDB } from "./db";

function main() {
  console.log("beginning migrations");
  migrate(db, {
    migrationsFolder:
      "C:\\Users\\tkirk\\OneDrive\\Documents\\source\\turbo\\monorepo-test\\packages\\db\\migrations",
  });
  console.log("migration ended, closing db");
  sqliteDB.close();
}

main();
