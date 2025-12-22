"use client";

import { CheckoutSidebar } from "../CheckoutSidebar";
import { useId, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { checkoutSchema } from "../../model/checkout-schema";
import { CheckoutForm } from "../CheckoutForm";
import { PageBanner } from "@/shared/ui";

export default function CheckoutPage() {
  const [paymentProcessing, setPaymentProcessing] = useState<boolean>(false);
  const checkoutFormID = useId();

  const form = useForm({
    defaultValues: {
      deliveryTime: "09:00",
      phone: "",
      orderType: "delivery",
    },
    resolver: zodResolver(checkoutSchema),
  });

  return (
    <>
      <PageBanner title="Checkout" />

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
    </>
  );
}
