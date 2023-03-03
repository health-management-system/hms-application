/// <reference types="Cypress" />
import PaginationNavigator from "./PaginationNavigator";
import React from "react";
import "../../../node_modules/tailwindcss/tailwind.css";

describe("Test for the PaginationNavigator", () => {
    it("Renders", () => {
        cy.mount(<PaginationNavigator />);
    });

    it("Renders with current and last page", () => {
        let currentNumber = Math.ceil(Math.random() * 10 + 1);
        let lastNumber = Math.ceil(Math.random() * 20 + 11);
        cy.mount(
            <PaginationNavigator
                currentIndex={currentNumber}
                lastPage={lastNumber}
            />
        );

        cy.get('[data-cy="PaginationNavigator-currentpage"]').contains(
            currentNumber.toString()
        );
        cy.get('[data-cy="PaginationNavigator-lastpage"]').contains(
            lastNumber.toString()
        );
    });

    it("Should handle left and right clicks", () => {
        const funcs = {
            increment: () => {},
            decrement: () => {},
        };
        cy.spy(funcs, "decrement").as("leftClick");
        cy.spy(funcs, "increment").as("rightClick");

        cy.mount(
            <PaginationNavigator
                onLeftClick={funcs.decrement}
                onRightClick={funcs.increment}
            />
        );

        cy.get("[data-cy=PaginationNavigator-leftclick]").click();
        cy.get("@leftClick").should("be.called", 1);

        cy.get("[data-cy=PaginationNavigator-rightclick]").click().click();
        cy.get("@rightClick").should("be.called", 2);
    });
});
