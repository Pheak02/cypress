describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/fundamentals')
  })

  it('contains correct header text', () => {
    cy.get('[data-test="fundamental-header"').contains(/Testing Fundamentals/i) //for case-sensitive
    cy.get('[data-test="fundamental-header"').contains('Testing Fundamentals') //for case-in-sensitive
    cy.get('[data-test="fundamental-header"').should('contain.text', 'Testing Fundamentals')
  })

  it('verify accordion correct', () => {
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
    cy.get('[data-test="accordion-item-1"] > div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('be.visible')
    cy.get('[data-test="accordion-item-1"] > div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
  })
})