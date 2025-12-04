import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import logout from "../api/logout";
import { LOGIN_ROUTE } from "@/shared/config";

export default function useSignin() {
  const router = useRouter();

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      document.cookie = `apiToken=; path=/; max-age=0; SameSite=Lax`;

      setTimeout(() => {
        router.replace(LOGIN_ROUTE);
      }, 100);
    },
  });
}
