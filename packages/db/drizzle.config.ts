import type { Config } from "drizzle-kit";

export default {
  schema: "./src/schema.ts",
  out: "./migrations",
  driver: "better-sqlite",
  dbCredentials: { url: "../../apps/api/foobar.sqlite" },
} satisfies Config;
