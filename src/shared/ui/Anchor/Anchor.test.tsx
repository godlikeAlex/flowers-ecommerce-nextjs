import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Anchor from "./Anchor";

describe("Anchor Component", () => {
  it("should render link with correct children", () => {
    const anchorLabel = "Buy";

    render(<Anchor href="#">{anchorLabel}</Anchor>);

    expect(screen.getByRole("link", { name: anchorLabel }));
  });

  it("should render link with correct path", () => {
    const anchorPath = "https://google.com";

    render(<Anchor href={anchorPath}>Google.com</Anchor>);

    expect(screen.getByRole("link")).toHaveAttribute("href", anchorPath);
  });
});
