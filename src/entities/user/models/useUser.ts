import { useQuery } from "@tanstack/react-query";
import { getUser } from "../api/get-user";

export const USER_ROOT_KEY = "user";

export default function useUser() {
  return useQuery({
    queryKey: [USER_ROOT_KEY],
    queryFn: () => getUser(),
  });
}
