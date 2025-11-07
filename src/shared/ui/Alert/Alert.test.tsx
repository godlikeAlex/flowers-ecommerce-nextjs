import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Alert from "./Alert";

describe("Alert Component", () => {
  it("should render alert message", () => {
    const message = "example message";

    render(<Alert>{message}</Alert>);

    expect(screen.getByRole("alert")).toBeInTheDocument();
    expect(screen.getByText(message)).toBeInTheDocument();
  });

  it("should render alert title", () => {
    const title = "example title";

    render(<Alert title={title}>Wow</Alert>);

    expect(screen.getByRole("paragraph")).toBeInTheDocument();
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it("should render alert type success with correct class", () => {
    render(<Alert type="success">Wow</Alert>);

    expect(screen.getByRole("alert")).toHaveClass("alert--success");
  });

  it("should render alert type info with correct class", () => {
    render(<Alert type="info">Wow</Alert>);

    expect(screen.getByRole("alert")).toHaveClass("alert--info");
  });

  it("should render alert type error with correct class", () => {
    render(<Alert type="error">Wow</Alert>);

    expect(screen.getByRole("alert")).toHaveClass("alert--error");
  });
});
