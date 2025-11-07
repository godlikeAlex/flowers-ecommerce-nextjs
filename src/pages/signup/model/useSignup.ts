import { useMutation } from "@tanstack/react-query";

import { SignupFormValues } from "../model/signup-schema";
import { signup } from "../api/signup";

export default function useSignup() {
  return useMutation({
    mutationFn: async (data: SignupFormValues) => {
      return signup(data);
    },
  });
}
