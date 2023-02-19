import React from "react";
//import { mount } from "cypress-react-unit-test";
import Subtitle from "./subtitle";

describe("Subtitle component <Subtitle />", () => {
  const subtitleSelector = "[data-cy=subtitle]";

  it("subtitle should display the correct title", () => {
    cy.mount(<Subtitle />);
    cy.get(subtitleSelector).should("contain.text", "Title");
  });

  it("subtitle should display the correct title", () => {
    cy.mount(<Subtitle title="My Subtitle" />);
    cy.get(subtitleSelector).should("contain.text", "My Subtitle");
  });
});
