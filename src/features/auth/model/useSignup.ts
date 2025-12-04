import { useMutation } from "@tanstack/react-query";

import signup from "../api/signup";

export default function useSignup() {
  return useMutation({
    mutationFn: signup,
  });
}
