"use client";

import { useUser } from "@/entities/user";
import { Button, Sidebar } from "@/shared/ui";
import { SignOutIcon } from "@phosphor-icons/react/dist/ssr/SignOut";
import Skeleton from "react-loading-skeleton";

import styles from "./AccountDetailsSidebar.module.css";
import clsx from "clsx";
import { useLogout } from "@/features/auth/model";

export default function AccountDetailsSidebar() {
  const user = useUser();
  const logoutMutation = useLogout();

  if (!user.data) {
    return <Skeleton height={350} borderRadius={25} />;
  }

  return (
    <div className={clsx(styles.sidebar, "text-center")}>
      <Sidebar>
        <div>
          <h5>{user.data.name}</h5>
          <p>{user.data.email}</p>
          <Button
            className="mx-auto mt-3"
            accessoryLeft={<SignOutIcon />}
            onClick={() => logoutMutation.mutate()}
            loading={logoutMutation.isPending}
          >
            Logout
          </Button>
        </div>
      </Sidebar>
    </div>
  );
}
