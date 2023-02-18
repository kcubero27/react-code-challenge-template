import { rest } from "msw";
import { API_ROUTES } from "@api/routes";
import { type PeopleResponse } from "@api/fetch-people";
import { type Person } from "@domain/person";
import { PersonObjectMother } from "@/tests/domain/people";

export const peopleHandler = rest.get<PeopleResponse>(API_ROUTES.API_ROUTE_GET_PEOPLE(), (req, res, ctx) => {
  // TODO: #19 limit is 10 and page 1
  const people = [];
  const previous = null;
  const next = null;
  const count = people.length;
  const paginatedPeople: Person[] = [new PersonObjectMother()];

  return res(
    ctx.status(200),
    ctx.json({
      count,
      next,
      previous,
      results: paginatedPeople,
    })
  );
});
