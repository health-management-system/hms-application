import React from "react";
import AddRecordPanel from "./add_record_panel";

describe("Tests for the Add Record Panel", () => {
    it("Renders", () => {
        cy.mount(<AddRecordPanel />);
    });
    it("Shows Correct text on patient Label", () => {
        cy.mount(<AddRecordPanel />);
        cy.get("#patient-label").should("have.text", "Patient");
    });
    it("Shows Correct text on subject Label", () => {
        cy.mount(<AddRecordPanel />);
        cy.get("#subject-label").should("have.text", "Subject");
    });
    it("Shows Correct text on log Label", () => {
        cy.mount(<AddRecordPanel />);
        cy.get("#log-label").should("have.text", "Log");
    });
    it("Shows blank subject field", () => {
        cy.mount(<AddRecordPanel />);
        cy.get("#subject-input").should("have.text", "");
    });
    it("Shows a blank textfield", () => {
        cy.mount(<AddRecordPanel />);
        cy.get("#log-input").should("have.text", "");
    });
    it('Supports "patientList" prop to intilize patient options', () => {
        // Delcare some users for the patient list
        const user1 = { key: "Sam", value: "user1" };
        const user2 = { key: "Dan", value: "user2" };
        const user3 = { key: "Ben", value: "user3" };

        // Intiate the component with the patient list
        cy.mount(
            <AddRecordPanel
                user={{ username: "dakotawong" }}
                patientList={[
                    { key: user1.key, value: user1.value },
                    { key: user2.key, value: user2.value },
                    { key: user3.key, value: user3.value },
                ]}
            />
        );

        // Check that the patient list has the correct options
        cy.get("#patient-select")
            .select(user1.key)
            .should("have.value", user1.value);
        cy.get("#patient-select")
            .select(user2.key)
            .should("have.value", user2.value);
        cy.get("#patient-select")
            .select(user3.key)
            .should("have.value", user3.value);
    });
    it("Allows information to be entered and posted (should clear fields afterwards)", () => {
        cy.mount(
            <AddRecordPanel patientList={[{ key: "Dakota", value: "user1" }]} />
        );
        cy.get("#patient-select").select("Dakota");
        cy.get("#subject-input").type("Test Subject");
        cy.get("#log-input").type(
            "Test description to explain the medical record"
        );
        cy.get("button").click();
        cy.get("#patient-select").should("have.value", null);
        cy.get("#subject-input").should("have.text", "");
        cy.get("#log-input").should("have.text", "");
    });
});
