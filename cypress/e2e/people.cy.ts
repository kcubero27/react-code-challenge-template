/// <reference types="cypress" />

import { API_ROUTES } from "../utils/route";

describe("People", () => {
	it("should render the people page", () => {
		cy.intercept(API_ROUTES.PEOPLE()).as("getPeople");

		cy.visit("/people");

		cy.findByText("loading...");
		cy.wait("@getPeople");

		cy.findByText("Luke Skywalker").should("exist");
	});
});

