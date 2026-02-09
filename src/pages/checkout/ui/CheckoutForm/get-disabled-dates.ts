import { getDateInNY, getMinSelectableDateNY } from "@/shared/lib";
import { OrderType } from "../../model/checkout-schema";
import { Matcher } from "react-day-picker";

export function getDisabledDates(orderType: OrderType) {
  const disabledDates: Matcher | Matcher[] | undefined = [
    { before: getMinSelectableDateNY() },
    { dayOfWeek: [0] },
  ];

  if (orderType === "delivery") {
    disabledDates.push(getDateInNY(2026, 1, 12));
    disabledDates.push(getDateInNY(2026, 1, 13));
    disabledDates.push(getDateInNY(2026, 1, 14));
  }

  return disabledDates;
}
