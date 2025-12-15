"use client";

import type { ReactNode } from "react";
import { Toaster } from "sonner";
import { QueryClientProvider } from "@tanstack/react-query";
import { getQueryClient } from "@/shared/lib";
import { SlideOverCartProvider } from "@/widgets/cart";

export default function Providers({ children }: { children: ReactNode }) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <SlideOverCartProvider>
        {children}
        <Toaster richColors closeButton />
      </SlideOverCartProvider>
    </QueryClientProvider>
  );
}
