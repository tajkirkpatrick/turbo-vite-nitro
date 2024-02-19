import { db } from "@myrepo/db/src/db";
import type { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";
/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/v11/context
 */
export async function createContext(opts: FetchCreateContextFnOptions) {
  return {
    opts,
    db,
  };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
