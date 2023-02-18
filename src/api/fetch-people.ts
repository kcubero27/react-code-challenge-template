import { type Person } from "@domain/person";
import { API_ROUTES } from "./routes";

export interface PeopleResponse {
  count: number;
  next: null | string; // "https://swapi.dev/api/people/?page=2"
  previous: null | string;
  results: Person[];
}

export const fetchPeople = async (): Promise<PeopleResponse[]> => {
  const response = await fetch(API_ROUTES.API_ROUTE_GET_PEOPLE(), {
    method: "GET",
  });

  return await response.json();
};
