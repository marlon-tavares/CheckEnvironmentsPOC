describe('Validação de URLs', () => {
  // Obtém as URLs do arquivo cypress.env.json
  const urls = Cypress.env('urls');

  urls.forEach((url) => {

    it(`Ambiente: ${url}`, () => {
      cy.visit(url);

      // Validações da tela
      cy.get('body').should('exist'); // Verifica se o body html foi carregado
      cy.get('[data-testid="login.username"]').should('be.visible'); // Input de login
      cy.get('[data-testid="login.password"]').should('be.visible'); // Input de password
      cy.xpath('//button[contains(., "Entrar")]').should('be.visible'); // Button 'Entrar'
      cy.xpath('//a[contains(., "Comece por aqui")]').should('be.visible'); // Button 'Comece por aqui'
      cy.xpath('//a[contains(., "Esqueci minha senha")]').should('be.visible'); // Link 'Esqueci minha senha'
    });
  });
});