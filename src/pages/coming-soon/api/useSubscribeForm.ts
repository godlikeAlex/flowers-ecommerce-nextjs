import { useMutation } from "@tanstack/react-query";
import { apiClient } from "@/shared/api";
import { SubscribeFormValues } from "../model/subscribe-schema";

interface SubscribeFormResponse {
  ok: boolean;
}

export default function useSubscribeForm() {
  return useMutation({
    mutationFn: (body: SubscribeFormValues) => {
      return apiClient.post<SubscribeFormResponse>(
        "/subscribe-coming-soon",
        body,
      );
    },
  });
}
