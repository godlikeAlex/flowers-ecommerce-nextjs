import { useMutation } from "@tanstack/react-query";

import signin from "../api/signin";

export default function useSignin() {
  return useMutation({
    mutationFn: signin,
  });
}
