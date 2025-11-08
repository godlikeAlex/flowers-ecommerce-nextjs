import { useMutation } from "@tanstack/react-query";
import { ApiClient } from "@/shared/api";
import { SubscribeFormValues } from "../model/subscribe-schema";

interface SubscribeFormResponse {
  ok: boolean;
}

export default function useSubscribeForm() {
  return useMutation({
    mutationFn: (body: SubscribeFormValues) => {
      return ApiClient.POST<SubscribeFormResponse>(
        "/subscribe-coming-soon",
        body,
      );
    },
  });
}
