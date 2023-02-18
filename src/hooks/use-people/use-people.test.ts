import { renderHook, waitFor } from "@testing-library/react";
import { usePeople } from "@hooks/use-people/use-people";
import { getClientWrapper } from "@tests/client-wrapper";
import { server } from "@tests/api/node";
import { rest } from "msw";
import { type PeopleResponse } from "@api/fetch-people";
import { PersonObjectMother } from "@tests/domain/people";
import { API_ROUTES } from "@api/routes";

describe("usePeople", () => {
  it("should return the access token", async () => {
    const mockPeopleResponse: PeopleResponse = {
      count: 1,
      next: null,
      previous: null,
      results: [new PersonObjectMother()],
    };
    server.use(
      rest.get(API_ROUTES.API_ROUTE_GET_PEOPLE(), (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(mockPeopleResponse));
      })
    );

    const { result } = renderHook(() => usePeople(), { wrapper: getClientWrapper() });

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
      expect(result.current.isLoading).toBe(false);
    });

    await waitFor(() => {
      expect(result.current.data).toMatchObject(mockPeopleResponse);
    });
  });
});
