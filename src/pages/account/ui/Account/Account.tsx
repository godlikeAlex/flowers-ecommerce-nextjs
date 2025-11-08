"use client";

import { useUser } from "@/entities/user";
import { useLogout } from "@/features/auth/model";
import { Button } from "@/shared/ui";

export default function Account() {
  const logoutMutation = useLogout();
  const user = useUser();

  return (
    <section>
      <h2>Account</h2>

      <h3>{user.data?.name}</h3>

      <Button
        onClick={() => logoutMutation.mutate()}
        loading={logoutMutation.isPending}
      >
        Logout
      </Button>
    </section>
  );
}
