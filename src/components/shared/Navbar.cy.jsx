import React from "react";
import "../../../node_modules/tailwindcss/tailwind.css";
import NavBar from "./Navbar";
import { MemoryRouter, useLocation } from "react-router-dom";

describe("Test for Navbar", () => {
    it("Renders with Memory router from react-router", () => {
        cy.mount(
            <MemoryRouter>
                <NavBar />
            </MemoryRouter>
        );
    });

    it("Shows Navbar menu and sign out buttons and sidebar is close ", () => {
        cy.mount(
            <MemoryRouter>
                <NavBar />
            </MemoryRouter>
        );
        cy.get('[data-cy="Navbar-container"]').as("NavbarContainer");

        cy.get("@NavbarContainer").find('[data-cy="Navbar-menu"]');
        cy.get("@NavbarContainer")
            .find('[data-cy="Navbar-menu"]')
            .find('[data-cy="Navbar-menu-normal"]');
        cy.get("@NavbarContainer").find('[data-cy="Navbar-sign-out"]');
        cy.get('[data-cy="Navbar-background-off"]');
        cy.get('[data-cy="Navbar-sidebar-off"]');
    });

    it("Shows sidebar if menu bar is clicked and closes afterwards", () => {
        cy.mount(
            <MemoryRouter>
                <NavBar />
            </MemoryRouter>
        );
        cy.get('[data-cy="Navbar-container"]').as("NavbarContainer");

        // Open Navbar
        cy.get("@NavbarContainer").find('[data-cy="Navbar-menu"]').click();
        cy.get("@NavbarContainer")
            .find('[data-cy="Navbar-menu"]')
            .find('[data-cy="Navbar-menu-close"]');
        cy.get('[data-cy="Navbar-background-on"]');
        cy.get('[data-cy="Navbar-sidebar-on"]');

        // Closes Navbar by clicking off it
        cy.get('[data-cy="Navbar-background-on"]').click();
        cy.get('[data-cy="Navbar-sidebar-on"]').should('not.exist')
    });

    it("Shows patient side bar when address is /patieninfo", () => {
        cy.mount(
            <MemoryRouter initialEntries={["/patientinfo"]}>
                <NavBar />
            </MemoryRouter>
        );
        cy.get('[data-cy="Navbar-container"]').as("NavbarContainer");

        cy.get("@NavbarContainer").find('[data-cy="Navbar-menu"]').click();
        cy.get('[data-cy="Navbar-sidebar-on"]').find(
            '[data-cy="Navbar-sidebar-patient"]'
        );
        cy.get(':nth-child(1) > h3').click()
    });

    it("Shows doctor side bar when address is /doctorinfo", () => {
        cy.mount(
            <MemoryRouter initialEntries={["/doctorinfo"]}>
                <NavBar />
            </MemoryRouter>
        );
        cy.get('[data-cy="Navbar-container"]').as("NavbarContainer");

        cy.get("@NavbarContainer").find('[data-cy="Navbar-menu"]').click();
        cy.get('[data-cy="Navbar-sidebar-on"]').find(
            '[data-cy="Navbar-sidebar-doctor"]'
        );
        cy.get(':nth-child(1) > h3').click()
    });
});
