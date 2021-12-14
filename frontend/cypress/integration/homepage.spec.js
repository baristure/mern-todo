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
  it('.click() - clickable test to Add Todo Button', () => {
    cy.get('#add-button').should('be.disabled');
    cy.get('#todo-input')
      .type('Read Book').should('have.value', 'Read Book');
    cy.get('#add-button').should('not.be.disabled');
  })
  it('.click() - reset todo input area after click to Add Todo Button', () => {
    cy.get('#todo-input').type('Read Book')
    cy.get('#add-button').click();
    cy.get('#todo-input').should('not.have.value', 'Read Book');
  })
  it('displays todo items area by default', () => {
    cy.get('.todo-list').its('length').should('be.gte', 0)
  })
  it('can add new todo items', () => {
    const newTodo = 'Feed the dog';

    cy.get('#todo-input').type(`${newTodo}{enter}`)
    cy.get('.todo-list')
      .its('length').should('be.gte', 0)
    cy.get('.todo-list').contains(newTodo)
  })
})