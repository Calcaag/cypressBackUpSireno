/// <reference types="cypress" />

describe("Central Exclusive Eats", () => {
  it("Open Central Exclusive Eats", () => {
    Cypress.on("uncaught:exception", () => {
      return false;
    });
    cy.visit("https://central.ph/eats");
  });
  it("Add to Cart", () => {
    cy.addToCart();
    cy.inputItems("CITY OF PASIG");
  });
  it("Verify if item is in cart", () => {
    Cypress.on("uncaught:exception", () => {
      return false;
    });
    cy.verifyItemValue();
  });
});
