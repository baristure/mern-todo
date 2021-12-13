context('Viewport', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('cy.viewport() - set the viewport size and dimension', () => {

        cy.get('#container').should('be.visible')
        cy.get('#todo-input').should('be.visible')
        cy.get('#add-button').should('be.visible')
        cy.viewport(320, 480)

        // lets see what our app looks like on different screens
        cy.viewport(2999, 2999)
        cy.viewport('macbook-15')
        cy.wait(200)
        cy.viewport('macbook-13')
        cy.wait(200)
        cy.viewport('macbook-11')
        cy.wait(200)
        cy.viewport('ipad-2')
        cy.wait(200)
        cy.viewport('ipad-mini')
        cy.wait(200)
        cy.viewport('iphone-6+')
        cy.wait(200)
        cy.viewport('iphone-6')
        cy.wait(200)
        cy.viewport('iphone-5')
        cy.wait(200)
        cy.viewport('iphone-4')
        cy.wait(200)
        cy.viewport('iphone-3')
        cy.wait(200)
        cy.viewport('ipad-2', 'portrait')
        cy.wait(200)
        cy.viewport('iphone-4', 'landscape')
        cy.wait(200)

    })
})