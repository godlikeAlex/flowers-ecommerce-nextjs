import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import PageBanner from "./PageBanner";

describe("Page banner component", () => {
  it("should render with passed title", () => {
    const title = "Shop page";

    render(<PageBanner title={title} />);

    expect(
      screen.getByRole("heading", { level: 1, name: title }),
    ).toBeInTheDocument();
  });
});
