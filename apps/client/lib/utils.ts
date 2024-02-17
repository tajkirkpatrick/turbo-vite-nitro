// import { api } from "./trpc";
import useSWR from "swr";

export const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useHook() {
  const { data, error, isLoading } = useSWR<{ nitro: string }>("/api", fetcher);
  // const { data, error, isLoading } = api.greeting.useSWR();

  return {
    data,
    isLoading,
    isError: error,
  };
}
