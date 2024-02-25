import { LoginForm } from "@/components/login-form";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/login")({
  component: Login,
});

function Login() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="min-w-[450px] max-w-lg rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-6 text-center text-4xl font-bold">Login</h1>
        <LoginForm />
        <div className="text-center">
          <p className="text-sm">
            Don't have an account?{" "}
            <Link className="text-blue-600 hover:underline" to="/register">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
