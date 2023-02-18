import { renderWithWrapper } from "@/tests/client-wrapper";
import { People } from "@pages/people/people";
import { screen, waitForElementToBeRemoved } from "@testing-library/react";
import { axe } from "jest-axe";
import { server } from "@tests/api/node";
import { rest } from "msw";
import { type PeopleResponse } from "@api/fetch-people";
import { API_ROUTES } from "@api/routes";
import { type Person } from "@domain/person";
import { PersonObjectMother } from "@tests/domain/people";

describe("People", () => {
  it("should render it without accessibility issues", async () => {
    const { container } = renderWithWrapper(<People />);
    await waitForElementToBeRemoved(() => screen.getByText("loading..."));
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("should render anakin skywalker name", async () => {
    server.use(
      rest.get<PeopleResponse>(API_ROUTES.API_ROUTE_GET_PEOPLE(), (req, res, ctx) => {
        const paginatedPeople: Person[] = [new PersonObjectMother({ name: "Anakin Skywalker" })];

        return res(
          ctx.status(200),
          ctx.json({
            count: 1,
            next: null,
            previous: null,
            results: paginatedPeople,
          })
        );
      })
    );

    renderWithWrapper(<People />);

    const anakinSkywalkerName = await screen.findByText("Anakin Skywalker");
    expect(anakinSkywalkerName).toBeInTheDocument();
  });
});
