import React from 'react'
import Registration from './patientReg'


describe('Tests for Patient Registration Component', () => {
    it('Renders the component', () => {
        cy.mount(<Registration />)
    })
    it('Clears inputs after clicking the submit button', () => {
        cy.mount(<Registration />)
        // Enter data
        cy.get('#firstname').type('John')
        cy.get('#lastname').type('Doe')
        cy.get('#dateOfBirth').type('2023-02-17')
        cy.get('#email').type('johnd@gmail.com')
        cy.get('#phoneNumber').type('516-353-3454')
        cy.get('#address').type('8 Ring rd')
        cy.get('#postalCode').type('N2L 8X3')
        cy.get('#healthCardNumber').type('9459834298j')
        // Submit data
        cy.get('#submit-button').click()
        // Check fields are cleared
        cy.get('#firstname').should("have.text", "")
        cy.get('#lastname').should("have.text", "")
        cy.get('#dateOfBirth').should("have.text", "")
        cy.get('#email').should("have.text", "")
        cy.get('#phoneNumber').should("have.text", "")
        cy.get('#address').should("have.text", "")
        cy.get('#postalCode').should("have.text", "")
        cy.get('#healthCardNumber').should("have.text", "")
    })
})