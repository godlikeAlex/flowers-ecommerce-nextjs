import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import QuantityControl from "./QuantityControl";
import userEvent from "@testing-library/user-event";

describe("QuantityControl Component", () => {
  it("should render input, and increment/decrement buttons", () => {
    render(
      <QuantityControl
        value={2}
        onIncrement={() => true}
        onDecrement={() => true}
      />,
    );

    expect(
      screen.getByRole("button", { name: "Increment" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: "quantity" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Decrement" }),
    ).toBeInTheDocument();
  });

  it("should render passed quantity", () => {
    const quantity = 25;
    render(
      <QuantityControl
        value={quantity}
        onIncrement={() => true}
        onDecrement={() => true}
      />,
    );

    expect(screen.getByRole("textbox", { name: "quantity" })).toHaveValue(
      `${quantity}`,
    );
  });

  it("should call onDecrement callback on click button decrement", async () => {
    const user = userEvent.setup();

    const onDecrement = vi.fn();
    const onIncrement = vi.fn();

    render(
      <QuantityControl
        value={1}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />,
    );

    const decrementButton = screen.getByRole("button", { name: "Decrement" });

    await user.click(decrementButton);
    await user.click(decrementButton);

    expect(onDecrement).toHaveBeenCalledTimes(2);
    expect(onIncrement).not.toHaveBeenCalled();
  });

  it("should call onIncrement callback on click button decrement", async () => {
    const user = userEvent.setup();

    const onDecrement = vi.fn();
    const onIncrement = vi.fn();

    render(
      <QuantityControl
        value={1}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />,
    );

    const incrementButton = screen.getByRole("button", { name: "Increment" });

    await user.click(incrementButton);
    await user.click(incrementButton);

    expect(onIncrement).toHaveBeenCalledTimes(2);
    expect(onDecrement).not.toHaveBeenCalled();
  });

  it("should call onChange handler", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn<(quantity: number | null) => void>();

    const typedQuantity = "12";

    render(
      <QuantityControl
        value={1}
        onIncrement={() => true}
        onDecrement={() => true}
        onChange={onChange}
      />,
    );

    const inputQuantity = screen.getByRole("textbox");

    await user.type(inputQuantity, typedQuantity);

    expect(onChange).toHaveBeenCalledTimes(2);
    expect(onChange).toHaveBeenCalledWith(+typedQuantity);
  });

  it("should blur input", async () => {
    const handleBlurChange = vi.fn();

    render(
      <QuantityControl
        value={1}
        onIncrement={() => true}
        onDecrement={() => true}
        onBlur={handleBlurChange}
      />,
    );

    const input = screen.getByRole("textbox");

    fireEvent.blur(input);

    expect(handleBlurChange).toHaveBeenCalledOnce();
  });
});
