import type { Config } from "drizzle-kit";

export default {
  schema: "./src/schema.ts",
  out: "./migrations",
  driver: "better-sqlite",
  dbCredentials: {
    url: "C:\\Users\\tkirk\\OneDrive\\Documents\\source\\turbo\\monorepo-test\\apps\\api\\foobar.sqlite",
  },
} satisfies Config;
