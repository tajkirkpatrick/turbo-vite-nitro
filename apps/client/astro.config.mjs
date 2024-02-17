import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  vite: {
    server: {
      proxy: {
        "/api": "http://localhost:3000/",
      },
    },
  },
});
