describe('First Test', () => {
  beforeEach(() => {
    cy.viewport(1024, 1366)
    cy.visit('http://localhost:3000/orderSystem')
  })

  it('should display an overlay when a product is clicked', () => {
    cy.get('#productListItem')
      .click()

    cy.get('#popup')
      .should('exist')
  })

  it('should close the overlay when the exit button is clicked', () => {
    cy.get('#productListItem')
      .click()

    cy.get('#closeButton')
      .click()

    cy.get('#popup')
      .should('not.exist')
  })
})
