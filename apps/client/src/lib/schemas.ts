import { email, minLength, object, string } from "valibot";

export const LoginSchema = object({
  email: string([email(), minLength(1)]),
  password: string([minLength(1)]),
});

export const RegisterSchema = object({
  username: string([minLength(1)]),
  email: string([email(), minLength(1)]),
  password: string([minLength(1)]),
});
