beforeEach(() => {
  cy.visit('');
  cy.viewport(1000, 800);
});

describe('app', () => {
  it('테스트용 텍스트를 화면에 보여준다.', () => {
    cy.findByText(/테스트/).should('exist');
  });
});
