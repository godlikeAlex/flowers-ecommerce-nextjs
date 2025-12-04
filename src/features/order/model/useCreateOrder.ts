"use client";

import { useMutation } from "@tanstack/react-query";
import { createOrder } from "../api/create-order";

export function useCreateOrder() {
  const mutation = useMutation({
    mutationFn: createOrder,
  });

  return {
    mutateAsync: mutation.mutateAsync,
    isPending: mutation.isPending,
  };
}
