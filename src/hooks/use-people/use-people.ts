import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { fetchPeople } from "@api/fetch-people";
import { type People } from "@domain/people";

export const USE_PEOPLE_REQUEST_KEY = "people";

export const usePeople = (): UseQueryResult<People[], unknown> => {
  return useQuery([USE_PEOPLE_REQUEST_KEY], async () => await fetchPeople());
};
