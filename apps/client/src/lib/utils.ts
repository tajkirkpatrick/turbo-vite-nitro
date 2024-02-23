import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { ofetch } from "ofetch";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { twMerge } from "tailwind-merge";

export const apiFetch = ofetch.create({
  // we want ofetch to send request to astro, who will proxy them on the dev server to localhost:3000
  baseURL: "/api",
  retry: 1,
  retryDelay: 3000,
  headers: { "Content-Type": "application/json", Accept: "application/json" },
});

const fetcher = (url: string) => apiFetch(url);

const poster = (url: string, { arg }: { arg: Record<string, any> }) =>
  apiFetch(url, {
    method: "POST",
    body: arg,
    onRequest(context) {
      console.log("sending post request to ", context.request.toString());
    },
  });

export function useHook() {
  const { data, error, isLoading, isValidating, mutate } = useSWR(
    "/swr/read",
    fetcher,
  );

  return {
    data,
    error,
    isLoading,
    isValidating,
    mutate,
  };
}

export function useRegister() {
  const { data, error, trigger, reset, isMutating } = useSWRMutation(
    "/swr/create",
    poster,
  );

  return {
    data,
    error,
    isMutating,
    reset,
    trigger,
  };
}

export function useLogin() {
  const { data, error, trigger, reset, isMutating } = useSWRMutation(
    "/swr/login",
    poster,
  );

  return {
    data,
    error,
    isMutating,
    reset,
    trigger,
  };
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
