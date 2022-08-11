require("cypress-xpath");

Cypress.Commands.add("addToCart", () => {
  cy.fixture("elements").then((el) => {
    cy.xpath(el.addToCart_button).click({ force: true });
  });
});

/**
 * @description This method inputs the requirements for an order
 */
Cypress.Commands.add("inputItems", (city) => {
  cy.fixture("elements").then((el) => {
    cy.get(el.order_modal).should("be.visible");
    cy.xpath(el.pickup_button).click();
    cy.get(el.chooseCity_dropdown).select(city, { force: true });
    cy.wait(500);
    cy.get(el.chooseStore_dropdown).select(1, { force: true });
    cy.wait(300);
    cy.xpath(el.confirmOrder_button).click();
    cy.wait(3000);
  });
});

/**
 * @description Gets the items Value and compare it
 */
Cypress.Commands.add("verifyItemValue", () => {
  cy.fixture("elements").then((el) => {
    cy.xpath(el.exclItem_name)
      .invoke("text")
      .then((item1) => {
        let selectedItemName = item1.trim();
        cy.wrap(selectedItemName).as("selectedItemName");
      });
    cy.xpath(el.exclItem_price)
      .invoke("text")
      .then((price1) => {
        let selectedItemPrice = price1.trim();
        cy.wrap(selectedItemPrice).as("selectedItemPrice");
      });
    //There's token expiration modal coming in and out and it'll log the user out so it's kinda weird
    cy.wait(500);
    cy.get(el.cart_header_button).click({ force: true });
    cy.wait(500);
    cy.get(el.cartItem_name)
      .invoke("text")
      .should((item2) => {
        let itemCart_name = item2.trim();
        expect(selectedItemName).to.eq(itemCart_name);
      });
    cy.get(el.cartItem_price)
      .invoke("text")
      .should((price2) => {
        let itemCart_price = price2.trim();
        expect(selectedItemPrice).to.eq(itemCart_price);
      });
  });
});
