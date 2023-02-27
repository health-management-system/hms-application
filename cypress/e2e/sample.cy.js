// E2E test using test user
// username: 'e2e_patient'
// password: 'passWord1'

// Starting project
before(() => {
  cy.log('Starting the react app...')
  cy.exec('npm start', { timeout: 10000 })
})

// Sign In before each test
beforeEach(() => {
  cy.visit('http://localhost:3000/')
  cy.get('.amplify-button--primary').should('be.visible')
  cy.get('#amplify-id-\\:ra\\:').type('e2e_patient')
  cy.get('#amplify-id-\\:rg\\:').type('passWord1')
  cy.get('.amplify-button--primary').click()
})

describe('Patient Tests', () => {
  it('Patient can Sign Out', () => {
    cy.get('div > :nth-child(2)')
    cy.get('.amplify-button--primary').should('be.visible')
  })
  it('Test user can update patient info', () => {
    cy.get('div > :nth-child(4)').click()

    // Check the URL is updated
    cy.url().should('include', '/patientInfo')

    // Navigate to update info
    cy.get('[data-cy="Navbar-menu-normal"]').click()
    cy.get(':nth-child(2) > h3').click()
    cy.url().should('include', '/patientinfo/update')

    // Update Info
    cy.get('#firstname').type('John')
    cy.get('#lastname').type('Smith')
    cy.get('#dateOfBirth').type('10/17/1995')
    cy.get('#email').type('jsmith@gmail.com')
    cy.get('#phoneNumber').type('517-256-7863')
    cy.get('#address').type('123 Sunview St, Waterloo ON')
    cy.get('#postalCode').type('N2l 0N2')
    cy.get('#healthCardNumber').type('15623d652d')
    cy.get('#submit-button').click()
  })
})