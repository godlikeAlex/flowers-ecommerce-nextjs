"use client";

import { CreditCard, PaymentForm } from "react-square-web-payments-sdk";

import styles from "./SquarePaymentCard.module.css";
import { formatPrice } from "@/shared/lib";
import { OrderPay } from "@/entities/order";
import { useProcessSquarePayment } from "@/features/order";
import { Hearts } from "react-loader-spinner";
import { isAxiosError } from "axios";
import { toast } from "sonner";
import { useRouter } from "nextjs-toploader/app";

export const PAY_BUTTON_CLASS = "pay_button_square-unique";

interface Props {
  orderForPay: OrderPay;
}

export default function SquarePaymentCard({ orderForPay }: Props) {
  const processSquarePayment = useProcessSquarePayment();
  const router = useRouter();

  return (
    <div style={{ position: "relative", minHeight: 250 }}>
      {processSquarePayment.isPending && (
        <div className={styles.loader}>
          <Hearts
            height="80"
            width="80"
            color="#0b5bb2"
            ariaLabel="hearts-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
          <h6>Payment is being processed</h6>
        </div>
      )}

      <PaymentForm
        applicationId={process.env.NEXT_PUBLIC_SQUARE_APPLICATION_ID}
        locationId={process.env.NEXT_PUBLIC_SQUARE_LOCATION_ID}
        cardTokenizeResponseReceived={async (tokenResult, verifiedBuyer) => {
          let token;
          let verificationToken;

          if (!tokenResult) return;

          if (tokenResult.status === "OK") {
            token = tokenResult.token;
          }

          if (verifiedBuyer?.token) {
            verificationToken = verifiedBuyer.token;
          }

          if (!token) return;

          try {
            await processSquarePayment.mutateAsync({
              orderUUID: orderForPay.order_uuid,
              source_id: token,
              verification_token: verificationToken,
            });

            toast.success("Payment Accepted", {
              duration: 5000,
              position: "bottom-center",
            });

            router.refresh();
          } catch (e) {
            if (isAxiosError(e)) {
              let message = "Error while payment";

              if (e.response?.data?.error) {
                message = e.response.data.error;
              }

              console.log(e.response?.data);

              toast.error(message, {
                duration: 5000,
                position: "bottom-center",
              });
            }
          }
        }}
        createVerificationDetails={() => ({
          amount: Intl.NumberFormat("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }).format(orderForPay.total_amount / 100),
          currencyCode: "USD",
          intent: "CHARGE",
          billingContact: {
            email: orderForPay.email,
          },
        })}
      >
        <CreditCard
          style={{
            input: {
              color: "#808080",
              backgroundColor: "#fbfdff",
              fontFamily: "Arial",
            },
            "input::placeholder": {
              color: "#808080",
            },
            ".input-container": {
              borderWidth: "1px",
              borderColor: "#0b5bb2",
            },
          }}
          buttonProps={{
            css: {
              backgroundColor: "var(--primary-color)",
              fontSize: "18px",
              color: "#fff",
              "&:hover": {
                opacity: 0.9,
              },
            },
          }}
        >
          <div
            style={{
              fontWeight: "700",
            }}
          >
            <span style={{ opacity: "0.9", fontWeight: "400" }}>Pay </span>
            {formatPrice(orderForPay.total_amount)}
          </div>
        </CreditCard>
      </PaymentForm>
    </div>
  );
}
