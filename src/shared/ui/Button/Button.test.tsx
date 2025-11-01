import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button } from "@/shared/ui";

describe("Button Component", () => {
  it("should render with passed children", () => {
    const buttonText = "Example Button";

    render(<Button>{buttonText}</Button>);

    expect(
      screen.getByRole("button", { name: buttonText }),
    ).toBeInTheDocument();
  });
});
