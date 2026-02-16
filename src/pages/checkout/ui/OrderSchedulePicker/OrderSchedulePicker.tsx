"use client";

import { useFormContext } from "react-hook-form";

import { useFulfillmentSchedule } from "@/entities/order";
import { Button, InputErrorMessage } from "@/shared/ui";
import { CheckoutForm } from "../../model/checkout-schema";
import Skeleton from "react-loading-skeleton";
import OrderScheduleFields from "./OrderScheduleFields";

interface Props {
  paymentIsProccessing: boolean;
  orderType: CheckoutForm["orderType"];
}

export default function OrderSchedulePicker({
  paymentIsProccessing,
  orderType,
}: Props) {
  const fulfillmentSchedule = useFulfillmentSchedule();
  const {
    formState: { errors },
  } = useFormContext<CheckoutForm>();

  if (fulfillmentSchedule.isPending) {
    return (
      <div>
        <Skeleton height={55} width={280} />
        <Skeleton height={33} width={120} />

        <InputErrorMessage>
          {errors.deliveryDate?.message || errors.deliveryTime?.message}
        </InputErrorMessage>
      </div>
    );
  }

  if (fulfillmentSchedule.isError) {
    return (
      <div>
        <h6>Error while loading fulfillment data</h6>
        <Button type="button" onClick={() => fulfillmentSchedule.refetch()}>
          Retry
        </Button>

        <InputErrorMessage>
          {errors.deliveryDate?.message || errors.deliveryTime?.message}
        </InputErrorMessage>
      </div>
    );
  }

  const fulfillment = fulfillmentSchedule.data[orderType];

  return (
    <OrderScheduleFields
      paymentIsProccessing={paymentIsProccessing}
      fulfillment={fulfillment}
    />
  );
}
