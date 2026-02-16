import { ApiClient } from "@/shared/api";
import { FulfillmentSchedule } from "../model/types";

export async function getFulfillmentSchedule() {
  const { data } = await ApiClient.GET<FulfillmentSchedule>("/schedule");

  return data;
}
