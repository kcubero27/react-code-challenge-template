import { renderWithWrapper } from "@/tests/client-wrapper";
import { People } from "@pages/people/people";
import { screen } from "@testing-library/react";
import { axe } from "jest-axe";

describe("something truthy and falsy", () => {
  it("should render it without accessibility issues", async () => {
    const { container } = renderWithWrapper(<People />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("true to be true", () => {
    renderWithWrapper(<People />);

    screen.getByText("loading...");
  });
});
