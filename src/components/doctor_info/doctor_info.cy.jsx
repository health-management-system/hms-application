import React from "react";
import DoctorInfo from './doctor_info';

describe('Tests for the Doctor Info Panel', () => {
    it('Renders', () => {
        cy.mount(<DoctorInfo />)
    })
    it('Shows Correct text on "first name" Label', () => {
        cy.mount(<DoctorInfo />)
        cy.get('#first-name-label').should('have.text', 'First Name:')
    })
    it('Shows Correct text on "last name" Label', () => {
        cy.mount(<DoctorInfo />)
        cy.get('#last-name-label').should('have.text', 'Last Name:')
    })
    it('Shows Correct text on "staff ID" Label', () => {
        cy.mount(<DoctorInfo />)
        cy.get('#staff-id-label').should('have.text', 'Staff ID:')
    })
    it('Shows Correct text on "clinic" Label', () => {
        cy.mount(<DoctorInfo />)
        cy.get('#clinic-label').should('have.text', 'Clinic(s):')
    })
    it('Shows Correct text on "specialization" Label', () => {
        cy.mount(<DoctorInfo />)
        cy.get('#specialization-label').should('have.text', 'Specialization:')
    })
    it('Shows Correct text on "email" Label', () => {
        cy.mount(<DoctorInfo />)
        cy.get('#email-label').should('have.text', 'Email:')
    })
    it('Shows Correct text on "Phone Number" Label', () => {
        cy.mount(<DoctorInfo />)
        cy.get('#phone-number-label').should('have.text', 'Phone Number:')
    })
    it('Component can be initialized by passing props argument', () => {
        // Declare an object to instanitate the component with
        const info = {
            firstName: 'John',
            lastName:'Smith',
            staffID: 'staff123456789',
            clinic: 'Waterloo Central',
            specilaization: 'Eye Doctor',
            email: 'jsmith@gmail.com',
            phoneNumber: '507-925-7788'
        }

        // Mount the component
        cy.mount(<DoctorInfo doctorInfo={info} />)

        // Check the table is populated with the correct info
        cy.get('#first-name').should('have.text', info.firstName)
        cy.get('#last-name').should('have.text', info.lastName)
        cy.get('#staff-id').should('have.text', info.staffID)
        cy.get('#clinic').should('have.text', info.clinic)
        cy.get('#specialization').should('have.text', info.specilaization)
        cy.get('#email').should('have.text', info.email)
        cy.get('#phone-number').should('have.text', info.phoneNumber)
    })
})