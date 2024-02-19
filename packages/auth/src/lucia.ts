import { Lucia } from "lucia";
export {
  type User,
  type Session,
  verifyRequestOrigin,
  generateId,
} from "lucia";

import { DrizzleSQLiteAdapter } from "@lucia-auth/adapter-drizzle";
import { db } from "@myrepo/db/src/db";
import * as schema from "@myrepo/db/src/schema";

const adapter = new DrizzleSQLiteAdapter(
  db,
  schema.sessionTable,
  schema.userTable
);

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    attributes: {
      // set to `true` when using HTTPS
      secure: process.env.NODE_ENV === "production",
    },
  },
});

// IMPORTANT!
declare module "lucia" {
  interface Register {
    Lucia: typeof lucia;
    DatabaseUserAttributes: DatabaseUserAttributes;
    SessionUserAttributes: SessionUserAttributes;
  }
}

interface DatabaseUserAttributes {
  username: string;
}

interface SessionUserAttributes {}
