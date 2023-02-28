import React from "react";
import AddRecordPanel from "./add_record_panel";

describe("Tests for the Add Record Panel", () => {
    it("Renders", () => {
        cy.mount(<AddRecordPanel />);
    });
    it("Shows Correct text on patient Label", () => {
        cy.mount(<AddRecordPanel />);
        cy.get("#patient-label").should("have.text", "Patient:");
    });
    it("Shows Correct text on subject Label", () => {
        cy.mount(<AddRecordPanel />);
        cy.get("#subject-label").should("have.text", "Subject:");
    });
    it("Shows Correct text on log Label", () => {
        cy.mount(<AddRecordPanel />);
        cy.get("#log-label").should("have.text", "Log:");
    });
    it("Shows blank subject field", () => {
        cy.mount(<AddRecordPanel />);
        cy.get("#subject-input").should("have.text", "");
    });
    it("Shows a blank textfield", () => {
        cy.mount(<AddRecordPanel />);
        cy.get("#log-input").should("have.text", "");
    });
    it("Allows information to be entered and posted (should clear fields afterwards)", () => {
        cy.mount(
            <AddRecordPanel patientList={{username: "test user"}} />
        );
        cy.get("#patient-input").type("Test Username");
        cy.get("#subject-input").type("Test Subject");
        cy.get("#log-input").type(
            "Test description to explain the medical record"
        );
        cy.get("button").click();
        cy.get("#patient-input").should("have.text", "");
        cy.get("#subject-input").should("have.text", "");
        cy.get("#log-input").should("have.text", "");
    });
});
