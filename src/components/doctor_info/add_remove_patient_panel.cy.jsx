import React from "react";
import AddRemovePatientPanel from "./add_remove_patient_panel.jsx";

const user = {
    username: "dakotawong"
}

describe("AddRemovePatientPanel component for adding and removing patients", () => {
    it("Renders", () => {
        cy.mount(<AddRemovePatientPanel user={user} />);
    });
    it("Renders with empty info", () => {
        cy.mount(<AddRemovePatientPanel />);
    });
    it("Text input field should begin empty", () => {
        cy.mount(<AddRemovePatientPanel user={user} />);
        cy.get("input").should("have.text", "");
    });
    it("Adds patient using their ID and clears input afterwards", () => {
        cy.mount(<AddRemovePatientPanel user={user} />);
        cy.get("input").type("20985951");
        cy.get("input").should("have.value", "20985951");
        cy.get("#add-button").click();
        cy.get("input").should("have.value", "");
    });
    it("Removes patient using their ID and clears input afterwards", () => {
        cy.mount(<AddRemovePatientPanel user={user} />);
        cy.get("input").type("20985951");
        cy.get("input").should("have.value", "20985951");
        cy.get('#remove-button').click();
        cy.get("input").should("have.value", "");
    });
    it("Form label has the correct test", () => {
        cy.mount(<AddRemovePatientPanel user={user} />);
        cy.get("label").should("have.text", "Patient Health I.D");
    });
    it("Check the add button text", () => {
        cy.mount(<AddRemovePatientPanel user={user} />);
        cy.get("#add-button").should("have.text", "Add");
    });
    it("Check the remove button text", () => {
        cy.mount(<AddRemovePatientPanel user={user} />);
        cy.get("#remove-button").should("have.text", "Remove");
    });
});
