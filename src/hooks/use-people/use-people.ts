import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { fetchPeople, type PeopleResponse } from "@api/fetch-people";

export const USE_PEOPLE_REQUEST_KEY = "people";

export const usePeople = (): UseQueryResult<PeopleResponse, unknown> => {
  return useQuery([USE_PEOPLE_REQUEST_KEY], async () => await fetchPeople());
};
