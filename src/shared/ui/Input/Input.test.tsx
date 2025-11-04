import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Input from "./Input";
import userEvent from "@testing-library/user-event";

describe("Input Component", () => {
  it("should render input with placeholder", () => {
    const placeholder = "Email";

    render(<Input placeholder={placeholder} />);

    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
  });

  it("should render with passed value", () => {
    const value = "example@gmail.com";

    render(<Input value={value} />);

    expect(screen.getByDisplayValue(value)).toBeInTheDocument();
  });

  it("should call onChange handler when user types", async () => {
    const user = userEvent.setup();
    const userInput = "example";
    const onChangeHandler = vi.fn();

    render(<Input onChange={onChangeHandler} />);

    await user.type(screen.getByRole("textbox"), userInput);

    expect(onChangeHandler).toBeCalledTimes(userInput.length);
  });

  it("should not call onChange handler when input disabled", async () => {
    const user = userEvent.setup();
    const userInput = "example";
    const onChangeHandler = vi.fn();

    render(<Input onChange={onChangeHandler} disabled />);

    await user.type(screen.getByRole("textbox"), userInput);

    expect(onChangeHandler).not.toBeCalled();
  });
});
