/// <reference types="cypress" />

describe("Central Exclusive Eats", () => {
  it("Open Central Exclusive Eats", () => {
    cy.visit("https://central.ph/eats");
  });

  it("Add to Cart", () => {
    cy.addToCart();
    cy.inputItems("CITY OF PASIG");
  });

  it("Verify if item is in cart", () => {
    cy.verifyItemValue();
  });

  beforeEach(() => {
    Cypress.on("uncaught:exception", () => {
      return false;
    });
    cy.restoreLocalStorage();
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });
});
