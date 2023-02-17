import { renderWithWrapper } from "@/tests/client-wrapper";
import { People } from "@pages/people/people";
import { screen } from "@testing-library/react";

describe("something truthy and falsy", () => {
  it("true to be true", () => {
    renderWithWrapper(<People />);

    screen.getByText("loading...");
  });
});
