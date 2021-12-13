beforeEach(() => {
  cy.visit("/");
})

describe('Renders the homepage', () => {
  it('Renders correctly', () => {
    cy.get('#container').should('exist');
    cy.get('#todo-input').should('exist');
    cy.get('#todo-input')
      .type('Read Book').should('have.value', 'Read Book')
  })
  it('.click() - click on a DOM element', () => {
    cy.get('#add-button').should('be.disabled');
    cy.get('#todo-input')
      .type('Read Book').should('have.value', 'Read Book');
    cy.get('#add-button').should('not.be.disabled');
    cy.get('#add-button').click();
    cy.get('#todo-input').should('not.have.value', 'Read Book');
  })
})