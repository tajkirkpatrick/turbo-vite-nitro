import { lucia } from "@myrepo/auth/src/lucia";

export default eventHandler(async (event) => {
  if (!event.context.session) {
    return sendError(event, new Error("No session found."));
  }

  await lucia.invalidateSession(event.context.session.id);

  const sessionCookie = lucia.createBlankSessionCookie();
  setCookie(event, sessionCookie.name, sessionCookie.value, {
    ...sessionCookie.attributes,
  });

  return send(event);
});
