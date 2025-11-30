import { set } from "date-fns";

export function toUTCDatetime(date: Date, time: string) {
  const [hours, minutes] = time.split(":").map(Number);

  const local = set(date, {
    hours,
    minutes,
    seconds: 0,
    milliseconds: 0,
  });

  return local.toISOString();
}
