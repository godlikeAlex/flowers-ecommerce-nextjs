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

  it("should show error message when error passed as string", () => {
    const errorMessage = "Something went wrong";

    render(<Input error={errorMessage} placeholder="Email" />);

    const input = screen.getByRole("textbox");
    const errorMessageElement = screen.getByText(errorMessage);

    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(input).toHaveAttribute("aria-errormessage");

    expect(errorMessageElement).toBeInTheDocument();

    expect(errorMessageElement).toHaveAttribute(
      "id",
      input.getAttribute("aria-errormessage"),
    );
  });

  it("should show error message when error passed as string", () => {
    const errorMessage = "Something went wrong";

    render(<Input error={errorMessage} placeholder="Email" />);

    const input = screen.getByRole("textbox");
    const errorMessageElement = screen.getByText(errorMessage);

    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(input).toHaveAttribute("aria-errormessage");

    expect(errorMessageElement).toBeInTheDocument();

    expect(errorMessageElement).toHaveAttribute(
      "id",
      input.getAttribute("aria-errormessage"),
    );
  });

  it("should error input indicates if error not string", () => {
    render(<Input error placeholder="Email" />);

    const input = screen.getByRole("textbox");

    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(input).not.toHaveAttribute("aria-errormessage");

    expect(input).toHaveClass("error");
  });
});
