describe('template spec', () => {
  it('contains correct header text', () => {
    cy.visit('fundamentals')
    cy.get('[data-test="fundamental-header"').contains(/Testing Fundamentals/i) //for case-sensitive
    cy.get('[data-test="fundamental-header"').contains('Testing Fundamentals') //for case-in-sensitive
    cy.get('[data-test="fundamental-header"').should('contain.text', 'Testing Fundamentals')
  })
})