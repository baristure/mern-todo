describe('Renders the homepage', () => {
  it('Renders correctly', () => {
    cy.visit("/");
    cy.get('#container').should('exist');
  })
})