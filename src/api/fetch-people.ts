// TODO: @domain
import { type People } from "@domain/people";
import { API_ROUTE_GET_PEOPL } from "./routes";

interface PeopleResponse {
	count: number;
	next: null | string; // "https://swapi.dev/api/people/?page=2"
	previous: null | string;
	results: People[];
}

export const fetchPeople = async (): Promise<PeopleResponse[]> => {
	const response = await fetch(API_ROUTE_GET_PEOPL, {
		method: "GET",
	});

	return await response.json();
};
