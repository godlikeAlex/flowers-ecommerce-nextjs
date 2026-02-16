import { FulfillmentChannelSchedule } from "@/entities/order";
import { getTimeslotsForDateOrWeekday } from "./get-timeslots";
import { CheckoutForm } from "../../model/checkout-schema";
import { Controller, useFormContext } from "react-hook-form";
import { DayPicker, InputLabel, TimeSlots } from "@/shared/ui";
import { checkAvailabilityDate } from "./check-availability-date";
import { useEffect, useMemo } from "react";

interface Props {
  fulfillment: FulfillmentChannelSchedule;
  paymentIsProccessing: boolean;
}

export default function OrderScheduleFields({
  fulfillment,
  paymentIsProccessing,
}: Props) {
  const {
    formState: { errors },
    control,
    watch,
    setValue,
  } = useFormContext<CheckoutForm>();

  const orderDate = watch("deliveryDate");
  const orderType = watch("orderType");

  const timeSlots = useMemo(
    () =>
      getTimeslotsForDateOrWeekday({
        fulfillment,
        date: orderDate,
      }),
    [fulfillment, orderDate],
  );

  useEffect(() => {
    const [firstTimeSlot] = timeSlots;

    if (!firstTimeSlot) return;

    setValue("deliveryTime", firstTimeSlot.time, {
      shouldValidate: true,
      shouldDirty: true,
    });
  }, [orderType, timeSlots, setValue]);

  return (
    <>
      <div className="col-md-6">
        <InputLabel>Shipping interval</InputLabel>
        <Controller
          control={control}
          disabled={paymentIsProccessing}
          name="deliveryDate"
          render={({ field }) => (
            <DayPicker
              animate
              inputDisabled={field.disabled}
              mode="single"
              selected={field.value}
              onSelect={field.onChange}
              placeholder="Select Shipping Date"
              disabled={checkAvailabilityDate(fulfillment)}
              error={
                errors.deliveryDate?.message || errors.deliveryTime?.message
              }
              timeZone="America/New_York"
            />
          )}
        />
      </div>

      <div className="col-md-12">
        <Controller
          control={control}
          name="deliveryTime"
          disabled={paymentIsProccessing}
          render={({ field }) => (
            <TimeSlots
              timeSlots={timeSlots}
              value={field.value}
              onChange={(time) => field.onChange(time)}
            />
          )}
        />
      </div>
    </>
  );
}
