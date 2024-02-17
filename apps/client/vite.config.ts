import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    qwikVite({
      csr: true,
    }),
  ],
  server: {
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
});
