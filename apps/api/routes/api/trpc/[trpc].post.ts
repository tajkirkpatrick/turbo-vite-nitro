import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { createContext } from "../../../lib/trpc/context";
import { appRouter } from "../../../lib/trpc/router";

export default eventHandler((evt) => {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req: toWebRequest(evt),
    router: appRouter,
    createContext,
  });
});
