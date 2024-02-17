import { createSWRProxyHooks } from "@trpc-swr/client";
import { httpBatchLink } from "@trpc/client";
import type { AppRouter } from "@myrepo/lib/trpc/router";

export const api = createSWRProxyHooks<AppRouter>({
  links: [
    httpBatchLink({
      url: "/api/trpc",
    }),
  ],
});
