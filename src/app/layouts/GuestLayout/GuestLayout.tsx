import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import { getUser, USER_ROOT_KEY } from "@/entities/user";
import { DEFAULT_REDIRECT_ROUTE } from "@/shared/config";
import { getQueryClient } from "@/shared/lib";

export default async function GuestLayout({
  children,
}: {
  children: ReactNode;
}) {
  const queryClient = getQueryClient();

  const user = await getUser();

  if (user) {
    return redirect(DEFAULT_REDIRECT_ROUTE);
  }

  await queryClient.prefetchQuery({
    queryKey: [USER_ROOT_KEY],
    queryFn: () => user,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
}
