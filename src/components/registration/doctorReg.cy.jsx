import React from 'react'
import Registration from './doctorReg'

const user = {
    username: "dakotawong"
}

describe('Tests for Doctor Registration Component', () => {
    it('Renders the component', () => {
        cy.mount(<Registration user={user}/>)
    })
    it('Clears inputs after clicking the submit button', () => {
        cy.mount(<Registration user={user}/>)
        // Enter data
        cy.get('#firstname').type('John')
        cy.get('#lastname').type('Doe')
        cy.get('#staffid').type('423423')
        cy.get('#clinic').type('johnd@gmail.com')
        cy.get('#specialization').type('Eye Doctor')
        cy.get('#email').type('johnd@gmail.com')
        cy.get('#phoneNumber').type('516-353-3454')
        // Submit data
        cy.get('#submit-button').click()
        // Check fields are cleared
        cy.get('#firstname').should("have.text", "")
        cy.get('#lastname').should("have.text", "")
        cy.get('#staffid').should("have.text", "")
        cy.get('#clinic').should("have.text", "")
        cy.get('#specialization').should("have.text", "")
        cy.get('#email').should("have.text", "")
        cy.get('#phoneNumber').should("have.text", "")
    })
})