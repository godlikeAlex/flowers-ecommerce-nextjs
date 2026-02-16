import { FulfillmentChannelSchedule, TimeSlot } from "@/entities/order";
import { formatDateTime, getNYDateParts } from "@/shared/lib";

interface Params {
  date: Date;
  fulfillment: FulfillmentChannelSchedule;
}

const FALLBACK_INTERVAL: TimeSlot = {
  label: "11:00 AM – 4:00 PM",
  time: "11:00",
};

export function getTimeslotsForDateOrWeekday({ date, fulfillment }: Params) {
  if (!date) return [];

  const currentDate = formatDateTime(date, "yyyy-MM-dd");
  const { weekDay } = getNYDateParts(date);

  const specificDateSlots = fulfillment.specific_date_slots[currentDate];

  if (specificDateSlots) return specificDateSlots;

  const weeklyTimeSlot = fulfillment.weekly_slots.find(
    (weeklyTimeSlot) => weeklyTimeSlot.day === weekDay,
  );

  return weeklyTimeSlot ? weeklyTimeSlot.slots : [FALLBACK_INTERVAL];
}
