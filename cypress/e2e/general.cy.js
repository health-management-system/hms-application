describe('General User Tests',()=>{
  it("Visit page that doesn't exist",()=>{
    // Sign In and redirect to non exisiting page
    cy.visit('/notExisting')
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
    // Sign In and redirect to view record page without a recordid param
    cy.visit('/patientinfo/viewRecord')
    cy.get('.amplify-button--primary').should('be.visible')
    cy.get('#amplify-id-\\:ra\\:').type('e2e_patient')
    cy.get('#amplify-id-\\:rg\\:').type('passWord1')
    cy.get('.amplify-button--primary').click()

    // Check for page not found header
    cy.get('.page-not-found-header').should('be.visible')

    // Click on go back button
    cy.get('.error-page-button').click()

    // Check that we have returned home
    cy.get('[data-cy="PatientHistoryTable-table-headers"]').should('be.visible')
  })
  it("view record with a valid record id",()=>{
    // Sign In and redirect view record page with a valid recordid param
    cy.visit('/patientinfo/viewRecord?recordid=test-record-id')
    cy.get('.amplify-button--primary').should('be.visible')
    cy.get('#amplify-id-\\:ra\\:').type('e2e_patient')
    cy.get('#amplify-id-\\:rg\\:').type('passWord1')
    cy.get('.amplify-button--primary').click()
    
    // Assert the correct record is shown and that it is displayed correctly
    cy.get(':nth-child(1) > .view-record-span').should('not.equal', '')
    cy.get(':nth-child(2) > .view-record-span').should('not.equal', '')
    cy.get(':nth-child(3) > .view-record-span').should('have.text', 'Sickness')
    cy.get(':nth-child(4) > .view-record-span').should('have.text', '10/17/2021')
    cy.get('.record-log-article').should('contain.text', 'Paragraphs are units of')
    
    // Click on go back button
    cy.get('.py-10 > .bg-priCol').click()
    
    // Check that we have returned home
    cy.get('[data-cy="PatientHistoryTable-table-headers"]').should('be.visible')
  })
  it("view record with invalid id",()=>{
    // Sign In and redirect view record page with an invalid recordid param
    cy.visit('/patientinfo/viewRecord?recordid=1')
    cy.get('.amplify-button--primary').should('be.visible')
    cy.get('#amplify-id-\\:ra\\:').type('e2e_patient')
    cy.get('#amplify-id-\\:rg\\:').type('passWord1')
    cy.get('.amplify-button--primary').click()
    
    // Assert we get a record not found
    cy.get('.page-not-found-header').should('have.text', 'Record Not Found')

    // Return Home
    cy.get('.error-page-button').click()
    
    // Check that we have returned home
    cy.get('[data-cy="PatientHistoryTable-table-headers"]').should('be.visible')
  })

})