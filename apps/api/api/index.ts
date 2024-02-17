export default defineEventHandler((evt) => {
  console.log("proxied from client-side astro");
  console.log("hello there");
  return { nitro: "is awesomeee!!!" };
});
