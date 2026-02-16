import { useQuery } from "@tanstack/react-query";
import { getFulfillmentSchedule } from "../api/get-fulfillment-schedule";

export function useFulfillmentSchedule() {
  return useQuery({
    queryKey: ["SCHEDULE"],
    queryFn: getFulfillmentSchedule,
  });
}
