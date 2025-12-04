import { set } from "date-fns";
import { formatInTimeZone, toZonedTime, fromZonedTime } from "date-fns-tz";

export const NY_TIMEZONE = "America/New_York";

export const getNowInNY = () => {
  return toZonedTime(new Date(), NY_TIMEZONE);
};

export const toNYTime = (date: Date | string | number) => {
  return toZonedTime(date, NY_TIMEZONE);
};

export const nyToUTC = (date: Date | string | number) => {
  return fromZonedTime(date, NY_TIMEZONE).toISOString();
};

export const utcToNY = (utcDate: Date | string | number) => {
  return toZonedTime(new Date(utcDate), NY_TIMEZONE);
};

export const getCurrentNYTimeFormatted = () => {
  return formatInTimeZone(new Date(), NY_TIMEZONE, "MMM dd, yyyy h:mm a zzz");
};

export const formatNYTime = (
  date: Date | string | number,
  formatStr = "MMM dd, yyyy h:mm a",
) => {
  return formatInTimeZone(date, NY_TIMEZONE, formatStr);
};

export function combineDateTimeToUTC(date: Date, time: string) {
  const [hours, minutes] = time.split(":").map(Number);

  const combined = set(date, {
    hours,
    minutes,
    seconds: 0,
    milliseconds: 0,
  });

  return fromZonedTime(combined, NY_TIMEZONE).toISOString();
}
