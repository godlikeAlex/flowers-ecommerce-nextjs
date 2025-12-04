import { useMutation } from "@tanstack/react-query";
import { processSquarePayment } from "../api/process-square-payment";

export function useProcessSquarePayment() {
  return useMutation({
    mutationFn: processSquarePayment,
  });
}
