import { isNYDate, isNYWeekDay } from "@/shared/lib";
import { OrderType } from "../../model/checkout-schema";
import { DELIVERY_INTERVALS, PICKUP_INTERVALS } from "./timeslots";

export function getTimeSlots({
  orderType,
  date,
}: {
  orderType: OrderType;
  date: Date | null;
}) {
  if (!date) return [];

  if (isNYDate(date, { day: 14, month: 2 })) {
    return [
      {
        label: "08:00 AM – 6:00 PM",
        time: "08:00",
      },
    ];
  }

  if (isNYWeekDay(date, 6)) {
    return [
      {
        label: "10:00 AM – 1:00 PM",
        time: "10:00",
      },
    ];
  }

  return orderType === "delivery" ? DELIVERY_INTERVALS : PICKUP_INTERVALS;
}
