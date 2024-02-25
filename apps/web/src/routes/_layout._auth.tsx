import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/_auth")({
  component: () => {
    console.log("hi");
    return (
      <>
        <div>
          <h3>nested Auth Layout!</h3>
          <Outlet />
        </div>
      </>
    );
  },
});
