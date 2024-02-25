import { RegisterForm } from "@/components/register-form";
import { createLazyFileRoute, Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_layout/register")({
  component: () => <Register />,
});

function Register() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="min-w-[450px] max-w-lg rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-6 text-center text-4xl font-bold">Sign Up!</h1>
        <RegisterForm />
        <div className="text-center">
          <p className="text-sm">
            Don't have an account?{" "}
            <Link className="text-blue-600 hover:underline" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
