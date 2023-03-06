import { slowCypressDown } from 'cypress-slow-down'

// E2E test using test users
const user1 = {
    username: "e2e_patient",
    password: "passWord1"
}
const user2 = {
    username: "test_doctor_1",
    password: "Welcome1%"
}

import generateRandomString from "./utils"

describe('New patient Tests', () => {
    // Sign In before each test
    beforeEach(() => {
        // Visit site address
        cy.visit('/')
    
        // Check login is visible
        cy.get('.amplify-button--primary').should('be.visible')
    
        // Login with test user credentials
        cy.get('#amplify-id-\\:ra\\:').type(user2.username)
        cy.get('#amplify-id-\\:rg\\:').type(user2.password)
        cy.get('.amplify-button--primary').click()
        
        // Enter the Doctor Profile
        cy.get('.content > div > :nth-child(3)').click()
    
        // Check the URL is updated correctly
        cy.url().should('include', '/patientinfo')
    })
    it('Test new patient user is redirected to registration', () => {
        // Check that the url matches the registration page
        cy.url().should('include', '/patientinfo/update')

        // Assert alert is displayed
        cy.get('.go2072408551').should('be.visible')
    })
})

describe('Existing Patient Tests', () => {
    // Sign In before each test
    beforeEach(() => {
        // Visit site address
        cy.visit('/')

        // Check login is visible
        cy.get('.amplify-button--primary').should('be.visible')

        // Login with test user credentials
        cy.get('#amplify-id-\\:ra\\:').type(user1.username)
        cy.get('#amplify-id-\\:rg\\:').type(user1.password)
        cy.get('.amplify-button--primary').click()

        // Enter the Patient Profile
        cy.intercept('https://j4mbz2k3ad.execute-api.us-east-1.amazonaws.com/latest/findpatient*').as('req')
        cy.get('.content > div > :nth-child(3)').click()
        cy.wait('@req').its('response.statusCode').should('eq', 200)

        // Check the URL is updated correctly
        cy.url().should('include', '/patientinfo')
    })
    it('Test user can update patient info', () => {
        // generate info
        const firstname = generateRandomString(10)
        const lastname = generateRandomString(10)
        const dateOfBirth = generateRandomString(10)
        const email = generateRandomString(10)
        const phoneNumber = generateRandomString(10)
        const address = generateRandomString(10)
        const postalCode = generateRandomString(10)
        const healthCardNumber = generateRandomString(10)

        // Navigate to update info
        cy.get('[data-cy="Navbar-menu-normal"]').click()
        cy.get(':nth-child(2) > h3').click()
        cy.url().should('include', '/patientinfo/update')

        // Update Info
        cy.get('#firstname').clear().type(firstname)
        cy.get('#lastname').clear().type(lastname)
        cy.get('#dateOfBirth').clear().type(dateOfBirth)
        cy.get('#email').clear().type(email)
        cy.get('#phoneNumber').clear().type(phoneNumber)
        cy.get('#address').clear().type(address)
        cy.get('#postalCode').clear().type(postalCode)
        cy.get('#healthCardNumber').clear().type(healthCardNumber)
        cy.get('#firstname').clear().type(firstname)
        cy.get('#submit-button').click()

        // Check if updated info appears on profile
        cy.get(':nth-child(1) > .user-info-span').should('have.text', firstname)
        cy.get(':nth-child(2) > .user-info-span').should('have.text', lastname)
        cy.get(':nth-child(3) > .user-info-span').should('have.text', dateOfBirth)
        cy.get(':nth-child(4) > .user-info-span').should('have.text', email)
        cy.get(':nth-child(5) > .user-info-span').should('have.text', address)
        cy.get(':nth-child(6) > .user-info-span').should('have.text', phoneNumber)
        cy.get(':nth-child(7) > .user-info-span').should('have.text', postalCode)
        cy.get(':nth-child(8) > .user-info-span').should('have.text', healthCardNumber)
    
        // Assert alert is displayed
        cy.get('.go3958317564').should('be.visible')
    })
    it('Tests user can successfully view a record', () => {
        // Click on a record in the table
        cy.get("[data-cy=PatientHistoryTable-record-field]").first().click()

        // Check for view record url
        cy.url().should('include', '/patientinfo/viewRecord?recordid=')

        // Check for record subtitle
        cy.get('[data-cy="subtitle"]').should('contain.text', 'Record')

        // Navigate back usign back button
        cy.get('.py-10 > .bg-priCol').click()

        // Check we are redirected to patient profile
        cy.url().should('include', '/patientinfo')
        cy.get('.py-10 > :nth-child(1)').should('contain.text', 'General Info')
    })

    // Run this test last as it needs to slow Cypress (All tests after it will run slow)
    it('Tests user can paginate forward and backwards', () => {
        // Slow down cypress interactions
        slowCypressDown(2000)

        //Assert user starts on page 1
        cy.get('[data-cy="PaginationNavigator-currentpage"]').should('have.text', '1')
        
        // Paginate Forward
        cy.intercept('https://j4mbz2k3ad.execute-api.us-east-1.amazonaws.com/latest/findpatient*').as('res')
        cy.get('[data-cy="PaginationNavigator-rightclick"] > path').click()
            .wait('@res', {responseTimeout: 10000, requestTimeout:10000})
     
        // Assert user is now on page 2
        cy.get("[data-cy=PatientHistoryTable-record-field]", { timeout: 10000 }).first().should('be.visible')
        cy.get('[data-cy="PaginationNavigator-currentpage"]', { timeout: 10000 }).should('have.text', '2')

        // Go back to page 1
        cy.get('[data-cy="PaginationNavigator-leftclick"] > path').click()
            .wait('@res', {responseTimeout: 10000, requestTimeout:10000})


        //Assert user goes back to page 1
        cy.get("[data-cy=PatientHistoryTable-record-field]", { timeout: 10000 }).first().should('be.visible')
        cy.get('[data-cy="PaginationNavigator-currentpage"]', { timeout: 10000 }).should('have.text', '1')

        // Paginate Forward
        cy.get('[data-cy="PaginationNavigator-rightclick"] > path').click()
            .wait('@res', {responseTimeout: 10000, requestTimeout:10000})

        // //Assert user goes back to page 2
        cy.get("[data-cy=PatientHistoryTable-record-field]", { timeout: 10000 }).first().should('be.visible')
        cy.get('[data-cy="PaginationNavigator-currentpage"]', { timeout: 10000 }).should('have.text', '2')

        // Click refresh button
        cy.get('[data-cy="refesh-table-button"]').click()
            .wait('@res', {responseTimeout: 10000, requestTimeout:10000})

        // //Assert user starts on page 1
        cy.get("[data-cy=PatientHistoryTable-record-field]", { timeout: 10000 }).first().should('be.visible')
        cy.get('[data-cy="PaginationNavigator-currentpage"]', { timeout: 10000 }).should('have.text', '1')

        // Return cypress interactions to regular speed
        slowCypressDown(false)
    })
})
