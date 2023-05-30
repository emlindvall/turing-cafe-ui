describe('Homepage Testing', () => {
beforeEach(() =>  {
  cy.intercept('GET', 'http://localhost:3001/api/v1/reservations/', {
  })
  .visit('http://localhost:3000/')
})

  it('User should see current reservations', () => {
    cy.get('.reservation-grid')
    cy.get('.reservation-container')
  })
})