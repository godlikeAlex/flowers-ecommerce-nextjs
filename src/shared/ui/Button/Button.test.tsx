import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import { Button } from "@/shared/ui";

describe("Button Component", () => {
  it("should render with passed children", () => {
    const buttonText = "Example Button";

    render(<Button>{buttonText}</Button>);

    expect(
      screen.getByRole("button", { name: buttonText }),
    ).toBeInTheDocument();
  });

  it("should render accessoryLeft", () => {
    const accessoryLeft = "Example Button";

    render(<Button accessoryLeft={accessoryLeft}>Button</Button>);

    expect(
      screen.getByText(new RegExp(accessoryLeft, "i")),
    ).toBeInTheDocument();
  });

  it("should render accessoryRight", () => {
    const accessoryRight = "Example Button";

    render(<Button accessoryRight={accessoryRight}>Button</Button>);

    expect(
      screen.getByText(new RegExp(accessoryRight, "i")),
    ).toBeInTheDocument();
  });

  it("should update background position on mouse move", async () => {
    const user = userEvent.setup();

    render(<Button>Click me</Button>);
    const button = screen.getByRole("button");
    const background = button.querySelector("span");

    expect(background).toBeInTheDocument();

    await user.hover(button);

    expect(background?.style.left).not.toBe("");
    expect(background?.style.top).not.toBe("");
  });
});
