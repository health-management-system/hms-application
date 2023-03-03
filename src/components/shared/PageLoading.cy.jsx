import PageLoading from "./PageLoading"
import React from "react"
import "../../../node_modules/tailwindcss/tailwind.css";


describe("Test for the PageLoading Component", ()=> {
    it("Renders and with a loader", () =>{
        cy.mount(<PageLoading/>);

        cy.get('[data-cy="PageLoading-loader"]')
    })
})