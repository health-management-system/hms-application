describe('General User Tests',()=>{
  it("Visit page that doesn't exist",()=>{
    cy.visit('http://localhost:3000/notExisting')
    cy.get('.amplify-button--primary').should('be.visible')
    cy.get('#amplify-id-\\:ra\\:').type('e2e_patient')
    cy.get('#amplify-id-\\:rg\\:').type('passWord1')
    cy.get('.amplify-button--primary').click()

    // Check for Page Not FOund Header
    cy.get('.page-not-found-header').should('be.visible')

    // Return Home
    cy.get('.error-page-button').click()
    
    // Check that we have returned home
    cy.get('[data-cy=homepage-header]').should('be.visible')
  })

  
  it("view record without id",()=>{
    // Sign In and redrirest to non exisiting page
  cy.visit('http://localhost:3000/patientinfo/viewRecord')
  cy.get('.amplify-button--primary').should('be.visible')
  cy.get('#amplify-id-\\:ra\\:').type('e2e_patient')
  cy.get('#amplify-id-\\:rg\\:').type('passWord1')
  cy.get('.amplify-button--primary').click()

    //check for go back button
  cy.get('.error-page-button').should('be.visible')
   //check for page not found header
  cy.get('.page-not-found-header').should('be.visible')
   //click on go back button
  cy.get('.error-page-button').click()
    // Check that we have returned home
  cy.get('[data-cy="PatientHistoryTable-table-headers"]').should('be.visible')

})

  it("view record correct id",()=>{
      // Sign In and redrirest to non exisiting page
    cy.visit('http://localhost:3000/patientinfo/viewRecord?recordid=c42062a6-baf0-47e8-9e97-3bfeb4b0a038')
    cy.get('.amplify-button--primary').should('be.visible')
    cy.get('#amplify-id-\\:ra\\:').type('e2e_patient')
    cy.get('#amplify-id-\\:rg\\:').type('passWord1')
    cy.get('.amplify-button--primary').click()
    //vew log filed should be visible
    cy.get('.page-not-found-header').should('be.visible')
    //click on go back button
    cy.get('.py-10 > .bg-priCol').click()
     // Check that we have returned home
     cy.get('[data-cy="PatientHistoryTable-table-headers"]').should('be.visible')

  })



  it("view record with invalid id",()=>{
      // Sign In and redrirest to non exisiting page
    cy.visit('http://localhost:3000/patientinfo/viewRecord?recordid=vvvvvvvvvvvvvv')
    cy.get('.amplify-button--primary').should('be.visible')
    cy.get('#amplify-id-\\:ra\\:').type('e2e_patient')
    cy.get('#amplify-id-\\:rg\\:').type('passWord1')
    cy.get('.amplify-button--primary').click()
    // Return Home
    cy.get('.error-page-button').click()
    
    // Check that we have returned home
    cy.get('[data-cy="PatientHistoryTable-table-headers"]').should('be.visible')

  })

})