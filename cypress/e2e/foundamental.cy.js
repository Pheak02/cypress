describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/fundamentals')
    cy.get('[data-test="fundamental-header"').contains(/Testing Fundamentals/i) //for case-sensitive
    cy.get('[data-test="fundamental-header"').contains('Testing Fundamentals') //for case-in-sensitive
    cy.get('[data-test="fundamental-header"').should('contain.text', 'Testing Fundamentals')
  })
})