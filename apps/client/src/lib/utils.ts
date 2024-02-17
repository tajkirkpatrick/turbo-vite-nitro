import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { api } from "./trpc";

export function useHook() {
  const { data, error, isLoading, isValidating, mutate } =
    api.greeting.useSWR();

  return {
    data,
    error,
    isLoading,
    isValidating,
    mutate,
  };
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
