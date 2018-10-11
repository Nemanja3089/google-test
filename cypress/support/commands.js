Cypress.Commands.add('visitGoogle', () => {
    cy.visit('/');
});

Cypress.Commands.add('elementIsDisplayed', (selector) => {
    cy.get(selector).should('be.visible');
});

Cypress.Commands.add('fillSearchInput', (text) => {
    cy
      .get('#lst-ib')
      .type(text);
});

Cypress.Commands.add('clickSearchButton', () => {
    cy
      .get('[name="btnK"]')
      .click({force: true});
});

Cypress.Commands.add('correctResultsAreDisplayedFirst', () => {
    cy
      .get('.bkWMgd')
      .first()
      .should('contain', 'https://www.showingtime.com/');
});

Cypress.Commands.add('verifyText', (selector, text) => {
    cy
      .get(selector)
      .should('contain', text);
});
