// E2E test using test user
// username: 'e2e_patient'
// password: 'passWord1'

import generateRandomString from "./utils"

// Sign In before each test
beforeEach(() => {
  cy.visit('http://localhost:3000/')
  cy.get('.amplify-button--primary').should('be.visible')
  cy.get('#amplify-id-\\:ra\\:').type('e2e_patient')
  cy.get('#amplify-id-\\:rg\\:').type('passWord1')
  cy.get('.amplify-button--primary').click()
})

describe('Doctor Tests', () => {
  it('Patient can Sign Out', () => {
    cy.get('div > :nth-child(2)')
    cy.get('.amplify-button--primary').should('be.visible')
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

    cy.get('div > :nth-child(3)').click()

    // Check the URL is updated
    cy.url().should('include', '/doctorInfo')

    // Navigate to update info
    cy.get('[data-cy="Navbar-menu-normal"]').click()
    cy.get(':nth-child(2) > h3').click()
    cy.url().should('include', '/doctorinfo/update')
    
    // Update Info
    cy.get('#firstname').type(firstname)
    cy.get('#lastname').type(lastname)
    cy.get('#staffid').type(staffid)
    cy.get('#clinic').type(clinic)
    cy.get('#specialization').type(specialization)
    cy.get('#email').type(email)
    cy.get('#phoneNumber').type(phonenumber)
    cy.get('#submit-button').click()

    // Back to profile (remove this section later)
    cy.get('[data-cy="Navbar-menu-normal"]').click()
    cy.get(':nth-child(1) > h3').click()

    // Check the URL is updated
    cy.url().should('include', '/doctorinfo')

    // Check if updated info appears on profile
    cy.get(':nth-child(1) > .user-info-span').should('have.text', firstname)
    cy.get(':nth-child(2) > .user-info-span').should('have.text', lastname)
    cy.get(':nth-child(3) > .user-info-span').should('have.text', staffid)
    cy.get(':nth-child(4) > .user-info-span').should('have.text', clinic)
    cy.get(':nth-child(5) > .user-info-span').should('have.text', specialization)
    cy.get(':nth-child(6) > .user-info-span').should('have.text', email)
    cy.get(':nth-child(7) > .user-info-span').should('have.text', phonenumber)
  })
})