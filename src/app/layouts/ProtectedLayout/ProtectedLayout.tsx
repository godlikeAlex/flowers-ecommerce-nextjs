import { ReactNode } from "react";
import { getUser, USER_ROOT_KEY } from "@/entities/user";
import { getQueryClient } from "@/shared/lib";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { LOGIN_ROUTE } from "@/shared/config";
import { redirect } from "next/navigation";

export default async function ProtectedLayout({
  children,
}: {
  children: ReactNode;
}) {
  const queryClient = getQueryClient();

  const user = await getUser();

  if (!user) {
    return redirect(LOGIN_ROUTE);
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
