export { };

Cypress.Commands.add('validarSessao', () => {
  cy.getCookie('user_session', { log: false }).then((cookie) => {
    if (cookie) {
      Cypress.log({
        name: 'AUTH',
        displayName: 'CACHE',
        message: 'Sessão restaurada com sucesso!',
      });
    }
  });
});

declare global {
  namespace Cypress {
    interface Chainable {
      validarSessao(): Chainable<void>;
    }
  }
}