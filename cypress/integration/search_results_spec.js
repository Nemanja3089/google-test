describe('Search results', () => {
    beforeEach(() => {
      cy.visitGoogle();
    });

    it('Verify if correct results are displayed first', () => {
        cy
          .fillSearchInput('ShowingTime')
          .clickSearchButton()
          .correctResultsAreDisplayedFirst();
    });
});
