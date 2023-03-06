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

describe('Existing Doctor Tests', () => {
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

        // Enter the Doctor Profile
        cy.get('.content > div > :nth-child(2)').click()

        // Check the URL is updated correctly
        cy.url().should('include', '/doctorinfo')
    })
    it('Test user can update doctor info', () => {
        // generate info
        const firstname = generateRandomString(10)
        const lastname = generateRandomString(10)
        const staffid = generateRandomString(10)
        const clinic = generateRandomString(10)
        const specialization = generateRandomString(10)
        const email = generateRandomString(10)
        const phonenumber = generateRandomString(10)

        // Navigate to update info
        cy.get('[data-cy="Navbar-menu-normal"]').click()
        cy.get(':nth-child(2) > h3').click()
        cy.url().should('include', '/doctorinfo/update')

        // Update Info
        cy.get('#firstname').clear().type(firstname)
        cy.get('#lastname').clear().type(lastname)
        cy.get('#staffid').clear().type(staffid)
        cy.get('#clinic').clear().type(clinic)
        cy.get('#specialization').clear().type(specialization)
        cy.get('#email').clear().type(email)
        cy.get('#phoneNumber').clear().type(phonenumber)
        cy.get('#submit-button').click()

        // Check if updated info appears on profile
        cy.get(':nth-child(1) > .user-info-span').should('have.text', firstname)
        cy.get(':nth-child(2) > .user-info-span').should('have.text', lastname)
        cy.get(':nth-child(3) > .user-info-span').should('have.text', staffid)
        cy.get(':nth-child(4) > .user-info-span').should('have.text', clinic)
        cy.get(':nth-child(5) > .user-info-span').should('have.text', specialization)
        cy.get(':nth-child(6) > .user-info-span').should('have.text', email)
        cy.get(':nth-child(7) > .user-info-span').should('have.text', phonenumber)
    
        // Assert alert is displayed
        cy.get('.go3958317564').should('be.visible')
    })
    it('Tests user can successfully post a record', () => {
        // generate info
        const patientID = "test_record_patient"
        const subject = "Cypress E2E Tests"
        const date = "10/04/2023"
        const log = "This is a cypress E2E test log"

        // Enter the info
        cy.get('#patient-input').type(patientID)
        cy.get('#subject-input').type(subject)
        cy.get('#date-input').type(date)
        cy.get('#log-input').type(log)

        // Post record and listen for response
        cy.intercept('https://j4mbz2k3ad.execute-api.us-east-1.amazonaws.com/latest/registerrecord').as('req')
        cy.get('.add-record-button').click()

        // Assert backend returns the correct response
        cy.wait('@req', {responseTimeout: 10000, requestTimeout:10000}).its('response.statusCode').should('eq', 201)

        // Assert alert is displayed
        cy.get('.go3958317564').should('be.visible')
    })
    it('Tests user cannot post an invalid record', () => {

        // Post invalid record and listen for response
        cy.intercept('https://j4mbz2k3ad.execute-api.us-east-1.amazonaws.com/latest/registerrecord').as('req')
        cy.get('.add-record-button').click()

        // Assert backend returns the correct response
        cy.wait('@req', {responseTimeout: 10000, requestTimeout:10000}).its('response.statusCode').should('eq', 500)
        
        // Assert alert is displayed
        cy.get('.go3958317564').should('be.visible')
    })
})

describe('New doctor Tests', () => {
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
        cy.get('.content > div > :nth-child(2)').click()
    
        // Check the URL is updated correctly
        cy.url().should('include', '/doctorinfo')
    })
    it('Test new doctor user is redirected to registration', () => {
        // Check that the url matches the registration page
        cy.url().should('include', '/doctorinfo/update')

        // Assert alert is displayed
        cy.get('.go2072408551').should('be.visible')
    })
})