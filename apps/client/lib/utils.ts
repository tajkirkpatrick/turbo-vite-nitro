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
