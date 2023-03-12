import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import Registration from './patientReg'

const user = {
    username: "dakotawong"
}

describe('Tests for Patient Registration Component', () => {
    it('Renders the component', () => {
        cy.mount(
            <Router>
                <Registration user={user}/>
            </Router>
        )
    })
    it('Doesn\'t clear inputs after clicking the submit button with invalid email', () => {
        cy.mount(
            <Router>
                <Registration user={user}/>
            </Router>
        )
        // Enter data
        cy.get('#firstname').type('John')
        cy.get('#lastname').type('Doe')
        cy.get('#dateOfBirth').type('2023-02-17')
        cy.get('#email').type('johndgmail.com')
        cy.get('#phoneNumber').type('613-353-3454')
        cy.get('#address').type('8 Ring rd')
        cy.get('#postalCode').type('N2L 8X3')
        cy.get('#healthCardNumber').type('9459834298j')

        // Submit data
        cy.get('#submit-button').click()

        // Check fields are not cleared
        cy.get('#firstname').should("have.value",'John')
        cy.get('#lastname').should("have.value", "Doe")
        cy.get('#dateOfBirth').should("have.value", "2023-02-17")
        cy.get('#email').should("have.value", "johndgmail.com")
        cy.get('#phoneNumber').should("have.value", "613-353-3454")
        cy.get('#address').should("have.value", "8 Ring rd")
        cy.get('#postalCode').should("have.value", "N2L 8X3")
        cy.get('#healthCardNumber').should("have.value", "9459834298j")
    })
    it('Doesn\'t clear inputs after clicking the submit button with invalid phone number', () => {
        cy.mount(
            <Router>
                <Registration user={user}/>
            </Router>
        )
        // Enter data
        cy.get('#firstname').type('John')
        cy.get('#lastname').type('Doe')
        cy.get('#dateOfBirth').type('2023-02-17')
        cy.get('#email').type('johnd@gmail.com')
        cy.get('#phoneNumber').type('613-353-345')
        cy.get('#address').type('8 Ring rd')
        cy.get('#postalCode').type('N2L 8X3')
        cy.get('#healthCardNumber').type('9459834298j')

        // Submit data
        cy.get('#submit-button').click()

        // Check fields are not cleared
        cy.get('#firstname').should("have.value",'John')
        cy.get('#lastname').should("have.value", "Doe")
        cy.get('#dateOfBirth').should("have.value", "2023-02-17")
        cy.get('#email').should("have.value", "johnd@gmail.com")
        cy.get('#phoneNumber').should("have.value", "613-353-345")
        cy.get('#address').should("have.value", "8 Ring rd")
        cy.get('#postalCode').should("have.value", "N2L 8X3")
        cy.get('#healthCardNumber').should("have.value", "9459834298j")

        
    })
    it('Can successfully register valid information', () => {
        cy.mount(
            <Router>
                <Registration user={user}/>
            </Router>
        )
        // Enter data
        cy.get('#firstname').type('John')
        cy.get('#lastname').type('Doe')
        cy.get('#dateOfBirth').type('2023-02-17')
        cy.get('#email').type('johnd@gmail.com')
        cy.get('#phoneNumber').type('613-353-3454')
        cy.get('#address').type('8 Ring rd')
        cy.get('#postalCode').type('N2L 8X3')
        cy.get('#healthCardNumber').type('9459834298j')

        // Submit data
        cy.intercept('https://j4mbz2k3ad.execute-api.us-east-1.amazonaws.com/latest/registerpatientinfo').as('req')
        cy.get('#submit-button').click()
        cy.wait('@req', {responseTimeout: 10000, requestTimeout:10000}).its('response.statusCode').should('eq', 201)
    })
})