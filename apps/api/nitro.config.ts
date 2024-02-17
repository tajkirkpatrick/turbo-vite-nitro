export default defineNitroConfig({
  experimental: {
    openAPI: true,
  },
  routeRules: {
    "/api/trpc/**": {
      cors: true,
      headers: {
        "access-control-allow-methods": "*",
        "access-control-allow-origin": "*",
        "access-control-allow-headers": "*",
      },
    },
  },
});
