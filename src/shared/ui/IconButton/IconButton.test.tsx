import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import IconButton from "./IconButton";

describe("IconButton Component", () => {
  it("should render with passed icon", () => {
    const icon = "icon";

    render(<IconButton icon={icon} />);

    expect(screen.getByRole("button", { name: icon })).toBeInTheDocument();
  });

  it("should render icon button variant primary with correct class", () => {
    render(<IconButton variant="primary" icon={""} />);

    expect(screen.getByRole("button")).toHaveClass("icon-button--primary");
  });

  it("should render icon button variant outline with correct class", () => {
    render(<IconButton variant="outline" icon={""} />);

    expect(screen.getByRole("button")).toHaveClass("icon-button--outline");
  });
});
