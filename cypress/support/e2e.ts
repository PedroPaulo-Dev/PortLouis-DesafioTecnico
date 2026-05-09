import './commands';
import '@cypress/xpath';

Cypress.on('uncaught:exception', (err) => {
  const errosIgnoraveis = [
    'keyboard-shortcuts-dialog',
    'global-nav-bar',
    'user-status-dialog'
  ];

  if (errosIgnoraveis.some(msg => err.message.includes(msg))) {
    return false;
  }

  return true;
});