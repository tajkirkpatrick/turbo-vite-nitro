import { Link } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/__404")({
  component: NotFoundPage,
});

export function NotFoundPage() {
  return (
    <div className="flex h-[100dvh] w-screen items-center justify-center">
      <div className="flex flex-col space-y-4 text-center">
        <h2 className="text-xl text-red-500">
          <span className="text-xl text-black">404 | </span>Page Not Found
        </h2>
        <Link
          to="/"
          className="text-md text-black underline underline-offset-4"
        >
          Head Back Home
        </Link>
      </div>
    </div>
  );
}
