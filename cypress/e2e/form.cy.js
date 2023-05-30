describe('Form Testing', () => {
  beforeEach(() =>  {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations/', {
    })
    .visit('http://localhost:3000/')
  })
  
    it('User should see a form used to make reservations', () => {
      cy.get('.booking-container')
    })
  
    it('User should be able to update form details', () => {
      cy.get('#name-field')
      .type('Em')
      .should('have.value', "Em")
      .get('#date-field')
      .type('2023-05-30')
      .should('have.value', '2023-05-30')
      .get('#time-field')
      .type('19:00')
      .should('have.value', '19:00')
      .get('#number-field')
      .type('2')
      .should('have.value', '2')
    })
  
    it('User should be able to submit new reservation', () => {
      cy.get('#name-field')
      .type('Em')
      .should('have.value', "Em")
      .get('#date-field')
      .type('2023-05-30')
      .should('have.value', '2023-05-30')
      .get('#time-field')
      .type('19:00')
      .should('have.value', '19:00')
      .get('#number-field')
      .type('2')
      .should('have.value', '2')
      .get('.button').click()
      .get('#Em')
    })
  })