describe('Error Testing', () => {
  beforeEach(() =>  {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {
      statusCode: 500
    })
    .visit('http://localhost:3000/')
  })
  
    it('User should be notified in case of failed fetch request', () => {
      cy.get('.error-container')
    })
  })