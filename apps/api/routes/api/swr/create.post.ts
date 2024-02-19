import { parseAsync, objectAsync, string } from "valibot";
import { generateId } from "lucia";
import { Argon2id } from "oslo/password";
import { lucia } from "@myrepo/auth/src/lucia";
import { db } from "@myrepo/db/src/db";
import * as schema from "@myrepo/db/src/schema";

const RegisterSchema = objectAsync({
  username: string([]),
  email: string([]),
  password: string([]),
});

export default eventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const parsed = await parseAsync(RegisterSchema, body);

    const userId = generateId(15);
    const hashedPassword = await new Argon2id().hash(parsed.password);

    // TODO: check if email is already used
    await db.insert(schema.userTable).values({
      id: userId,
      username: parsed.username,
      password: hashedPassword,
      email: parsed.email,
    });

    return send(event);
  } catch (e) {
    console.error(e);
    return sendError(event, e);
  }
});
