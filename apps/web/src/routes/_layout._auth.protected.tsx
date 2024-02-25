import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/_auth/protected")({
  component: () => (
    <>
      <div>Hello /_layout/_auth/protected!</div>
    </>
  ),
});
