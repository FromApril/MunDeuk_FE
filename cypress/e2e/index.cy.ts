beforeEach(() => {
  cy.visit('');
  cy.viewport(375, 812);
});

describe('index 페이지', () => {
  it('<네이버맵으로 이동> 링크가 존재한다.', () => {
    cy.findByText(/네이버맵으로 이동/).should('exist');
  });

  it('<카카오맵으로 이동> 링크가 존재한다.', () => {
    cy.findByText(/카카오맵으로 이동/).should('exist');
  });

  it('<네이버맵으로 이동> 링크를 클릭하면 네이머맵 페이지로 이동한다', () => {
    cy.findByText(/네이버맵으로 이동/).click();
    cy.findByText(/Loading.../).should('exist');
  });

  // TODO
  // it('<카카오맵으로 이동> 링크를 클릭하면 카카오맵 페이지로 이동한다', () => {
  // })
});
