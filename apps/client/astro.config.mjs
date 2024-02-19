import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "static",
  vite: {
    optimizeDeps: { exclude: ["oslo"] },
    server: {
      // in third party packages like trpc-swr, it doesn't work with the proxy option
      proxy: {
        "^/api/.*": {
          target: "http://localhost:3000",
        },
      },
    },
  },
  integrations: [react(), tailwind()],
});
