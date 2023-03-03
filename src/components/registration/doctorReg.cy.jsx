import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import Registration from './doctorReg'

const user = {
    username: "dakotawong"
}

describe('Tests for Doctor Registration Component', () => {
    it('Renders the component', () => {
        cy.mount(
            <Router>
                <Registration user={user}/>
            </Router>
        )
    })
    it('Clears inputs after clicking the submit button', () => {
        cy.mount(
            <Router>
                <Registration user={user}/>
            </Router>
        )
        // Enter data
        cy.get('#firstname').type('John')
        cy.get('#lastname').type('Doe')
        cy.get('#staffid').type('423423')
        cy.get('#clinic').type('johnd@gmail.com')
        cy.get('#specialization').type('Eye Doctor')
        cy.get('#email').type('johnd@gmail.com')
        cy.get('#phoneNumber').type('516-353-3454')

        // Submit data
        cy.intercept('https://j4mbz2k3ad.execute-api.us-east-1.amazonaws.com/latest/registerdoctorinfo').as('req')
        cy.get('#submit-button').click()
        cy.wait('@req', {responseTimeout: 10000, requestTimeout:10000}).its('response.statusCode').should('eq', 201)
        
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