import React from "react";
import ViewRecord from "./patient_record";

// Declare an object to instanitate the component with
const record = {
    subject: "Sickness",
    doctorName: "Dr John Smith",
    clinic: "Waterloo Central",
    dateTime: "10/17/2021",
    log: "This is a sample paragraph that would be typed into the medical log by a doctor."
};

describe("Tests for the view patient record panel", () => {
    it("Renders", () => {
        cy.mount(<ViewRecord record={record}/>);
    });
    it("Component fields labels can be initialized by passing props argument", () => {
        // Mount the component
        cy.mount(<ViewRecord record={record} />);

        // Check the component is populated with the correct info
        cy.get(':nth-child(1) > .view-record-span').should("have.text", record.doctorName);
        cy.get(':nth-child(2) > .view-record-span').should("have.text", record.clinic);
        cy.get(':nth-child(3) > .view-record-span').should("have.text", record.subject);
        cy.get(':nth-child(4) > .view-record-span').should("have.text", record.dateTime);
        cy.get('.record-log-article').should("have.text", record.log);
    });
});
