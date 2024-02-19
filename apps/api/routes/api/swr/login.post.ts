import { parseAsync, objectAsync, string } from "valibot";
import { Argon2id } from "oslo/password";
import { lucia } from "@myrepo/auth/src/lucia";
import { db } from "@myrepo/db/src/db";

const LoginSchema = objectAsync({
  email: string([]),
  password: string([]),
});

export default eventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const parsed = await parseAsync(LoginSchema, body);

    const existingUser = await db.query.userTable.findFirst({
      where: (userTable, { eq }) => eq(userTable.email, parsed.email),
    });
    if (!existingUser)
      sendError(event, new Error("Incorrect email or password."));

    const validPassword = await new Argon2id().verify(
      existingUser.password,
      parsed.password
    );
    if (!validPassword)
      sendError(event, new Error("Incorrect email or password."));

    const session = await lucia.createSession(existingUser.id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    setCookie(event, sessionCookie.name, sessionCookie.value, {
      ...sessionCookie.attributes,
    });

    return send(event);
  } catch (e) {
    console.error(e);
    return sendError(event, e);
  }
});
