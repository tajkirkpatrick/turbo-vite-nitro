import { parseAsync, objectAsync, string } from "valibot";
import { Argon2id } from "oslo/password";
import { db } from "@myrepo/db/src/db";
import * as schema from "@myrepo/db/src/schema";
import { generateId } from "@myrepo/auth/src/lucia";

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
      email: parsed.email,
      username: parsed.username,
      password: hashedPassword,
    });

    return send(event);
  } catch (e) {
    console.error(e);
    return sendError(event, e);
  }
});
