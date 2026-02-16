import { isBefore } from "date-fns";
import { FulfillmentChannelSchedule } from "@/entities/order/model/types";
import {
  formatDateTime,
  getMinSelectableDateNY,
  getNYDateParts,
} from "@/shared/lib";

export function checkAvailabilityDate(fulfillment: FulfillmentChannelSchedule) {
  return function isDisabled(date: Date) {
    const { weekDay } = getNYDateParts(date);

    const currentDate = formatDateTime(date, "yyyy-MM-dd");

    const specificDate = fulfillment.specific_date_slots[currentDate];

    if (specificDate) {
      return false;
    }

    if (fulfillment.specific_disabled_dates.includes(currentDate)) {
      return true;
    }

    if (fulfillment.weekly_disabled_days.includes(weekDay)) {
      return true;
    }

    return isBefore(date, getMinSelectableDateNY(fulfillment.min_order_days));
  };
}
