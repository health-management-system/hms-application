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
    it('Doesn\'t clears inputs after submiting invalid email', () => {
        cy.mount(
            <Router>
                <Registration user={user}/>
            </Router>
        )
        // Enter data
        cy.get('#firstname').type('John')
        cy.get('#lastname').type('Doe')
        cy.get('#staffid').type('423423')
        cy.get('#clinic').type('Waterloo Central')
        cy.get('#specialization').type('Eye Doctor')
        cy.get('#email').type('johnd@gmail.co')
        cy.get('#phoneNumber').type('516-353-3454')

        // Submit data
        cy.get('#submit-button').click()
        
        // Check fields are not cleared
        cy.get('#firstname').should("have.value", "John")
        cy.get('#lastname').should("have.value", "Doe")
        cy.get('#staffid').should("have.value", "423423")
        cy.get('#clinic').should("have.value", "Waterloo Central")
        cy.get('#specialization').should("have.value", "Eye Doctor")
        cy.get('#email').should("have.value", "johnd@gmail.co")
        cy.get('#phoneNumber').should("have.value", "516-353-3454")
    })
    it('Doesn\'t clears inputs after submiting invalid phone number', () => {
        cy.mount(
            <Router>
                <Registration user={user}/>
            </Router>
        )
        // Enter data
        cy.get('#firstname').type('John')
        cy.get('#lastname').type('Doe')
        cy.get('#staffid').type('423423')
        cy.get('#clinic').type('Waterloo Central')
        cy.get('#specialization').type('Eye Doctor')
        cy.get('#email').type('johnd@gmail.com')
        cy.get('#phoneNumber').type('51-353-3454')

        // Submit data
        cy.get('#submit-button').click()
        
        // Check fields are not cleared
        cy.get('#firstname').should("have.value", "John")
        cy.get('#lastname').should("have.value", "Doe")
        cy.get('#staffid').should("have.value", "423423")
        cy.get('#clinic').should("have.value", "Waterloo Central")
        cy.get('#specialization').should("have.value", "Eye Doctor")
        cy.get('#email').should("have.value", "johnd@gmail.com")
        cy.get('#phoneNumber').should("have.value", "51-353-3454")
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
        cy.get('#phoneNumber').type('613-353-3454')

        // Submit data
        cy.intercept('https://j4mbz2k3ad.execute-api.us-east-1.amazonaws.com/latest/registerdoctorinfo').as('req')
        cy.get('#submit-button').click()
        cy.wait('@req', {responseTimeout: 10000, requestTimeout:10000}).its('response.statusCode').should('eq', 201)
    })
})