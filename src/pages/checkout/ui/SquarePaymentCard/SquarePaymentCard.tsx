import { CreditCard, PaymentForm } from "react-square-web-payments-sdk";

import styles from "./SquarePaymentCard.module.css";

export const PAY_BUTTON_CLASS = "pay_button_square-unique";

export default function SquarePaymentCard() {
  return (
    <PaymentForm
      applicationId={"sandbox-sq0idb-6CEzpDjag4YcSAcCzaZBlw"}
      locationId="LZ01901M67FSA"
      cardTokenizeResponseReceived={async (tokenResult, verifiedBuyer) => {
        console.log(tokenResult, "WOWWW!");
        // if (!tokenResult) return;
        // if (tokenResult.status === "OK") {
        //   console.log("WOWWW", verifiedBuyer);
        //   ApiClient.POST("/checkout", { nonce: tokenResult.token });
        // }
      }}
      createVerificationDetails={() => ({
        amount: "10.00",
        currencyCode: "USD",
        intent: "CHARGE",
        billingContact: {
          email: "test@example.com",
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
        buttonProps={
          {
            // style: { display: "none" },
          }
        }
      >
        <div className={PAY_BUTTON_CLASS}>pay</div>
      </CreditCard>
    </PaymentForm>
  );
}
