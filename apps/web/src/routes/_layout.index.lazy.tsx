import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_layout/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
