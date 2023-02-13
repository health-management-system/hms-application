import React from "react";
import DoctorInfo from "./user_info";

// Declare an object to instanitate the component with
const info = [
    { label: "FirstName:", value: "John", label_id: "1", value_id: "2" },
    { label: "LastName:", value: "Smith", label_id: "3", value_id: "4" },
    { label: "StaffID:", value: "1234567890", label_id: "5", value_id: "6" },
    { label: "Clinic:", value: "Centerville", label_id: "7", value_id: "8" },
    {
        label: "Specialization:",
        value: "Dermatologist",
        label_id: "9",
        value_id: "10",
    },
    {
        label: "Email:",
        value: "jsmith@gmail.com",
        label_id: "11",
        value_id: "12",
    },
    {
        label: "PhoneNumber:",
        value: "517-223-3456",
        label_id: "13",
        value_id: "14",
    },
];

describe("Tests for the Doctor Info Panel", () => {
    it("Renders", () => {
        cy.mount(<DoctorInfo />);
    });
    it("Component field labels can be initialized by passing props argument", () => {
        // Mount the component
        cy.mount(<DoctorInfo doctorInfo={info} />);

        // Check the table is populated with the correct info
        cy.get("#" + info[0].label_id).should("have.text", info[0].label);
        cy.get("#" + info[1].label_id).should("have.text", info[1].label);
        cy.get("#" + info[2].label_id).should("have.text", info[2].label);
        cy.get("#" + info[3].label_id).should("have.text", info[3].label);
        cy.get("#" + info[4].label_id).should("have.text", info[4].label);
        cy.get("#" + info[5].label_id).should("have.text", info[5].label);
        cy.get("#" + info[6].label_id).should("have.text", info[6].label);
    });
    it("Component field values can be initialized by passing props argument", () => {
        // Mount the component
        cy.mount(<DoctorInfo doctorInfo={info} />);

        // Check the table is populated with the correct info
        cy.get("#" + info[0].value_id).should("have.text", info[0].value);
        cy.get("#" + info[1].value_id).should("have.text", info[1].value);
        cy.get("#" + info[2].value_id).should("have.text", info[2].value);
        cy.get("#" + info[3].value_id).should("have.text", info[3].value);
        cy.get("#" + info[4].value_id).should("have.text", info[4].value);
        cy.get("#" + info[5].value_id).should("have.text", info[5].value);
        cy.get("#" + info[6].value_id).should("have.text", info[6].value);
    });
});
