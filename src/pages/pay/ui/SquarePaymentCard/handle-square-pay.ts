import { PAY_BUTTON_CLASS } from "./SquarePaymentCard";

export const handleSquareClickPay = () => {
  const childElementInButton = document.querySelector<HTMLButtonElement>(
    `.${PAY_BUTTON_CLASS}`,
  );

  if (!childElementInButton) {
    return;
  }

  const squarePayButton =
    childElementInButton.closest<HTMLButtonElement>("button");

  if (!squarePayButton) {
    return;
  }

  squarePayButton.click();
};
