"use client";

import type { ReactNode } from "react";
import { Toaster } from "sonner";
import { YandexMetricaProvider } from "next-yandex-metrica";
import { QueryClientProvider } from "@tanstack/react-query";
import { getQueryClient } from "@/shared/lib";
import { SlideOverCartProvider } from "@/widgets/cart";

export default function Providers({ children }: { children: ReactNode }) {
  const queryClient = getQueryClient();

  return (
    <YandexMetricaProvider
      tagID={106231671}
      initParameters={{
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true,
      }}
      router="app"
    >
      <QueryClientProvider client={queryClient}>
        <SlideOverCartProvider>
          {children}
          <Toaster richColors closeButton />
        </SlideOverCartProvider>
      </QueryClientProvider>
    </YandexMetricaProvider>
  );
}
