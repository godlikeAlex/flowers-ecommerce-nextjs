"use client";

import { CheckoutSidebar } from "../CheckoutSidebar";
import { useId, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { checkoutSchema } from "../../model/checkout-schema";
import { CheckoutForm } from "../CheckoutForm";

export default function CheckoutPage() {
  const [paymentProcessing, setPaymentProcessing] = useState<boolean>(false);
  const checkoutFormID = useId();
  const form = useForm({
    defaultValues: { deliveryTime: "12:30" },
    resolver: zodResolver(checkoutSchema),
  });

  return (
    <FormProvider {...form}>
      <section className="py-80">
        <div className="container">
          <div className="row row-gap-4">
            <div className="col-md-8">
              <CheckoutForm
                checkoutFormID={checkoutFormID}
                paymentIsProccessing={paymentProcessing}
                setPaymentIsProccessing={setPaymentProcessing}
              />
            </div>
            <div className="col-md-4">
              <CheckoutSidebar
                checkoutFormID={checkoutFormID}
                paymentIsProccessing={paymentProcessing}
                setPaymentIsProccessing={setPaymentProcessing}
              />
            </div>
          </div>
        </div>
      </section>
    </FormProvider>
  );
}
