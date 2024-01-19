import 'cypress-mochawesome-reporter/register';
import 'cypress-xpath';

Cypress.on('uncaught:exception', (err, runnable) => {
    // Returning false here prevents Cypress from failing the test
    return false;
  });