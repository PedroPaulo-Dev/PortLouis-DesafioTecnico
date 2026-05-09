import loginPage from '../support/pages/LoginPage';
import repoPage from '../support/pages/RepoPage';
import profilePage from '../support/pages/ProfilePage';

describe('Cenário de Teste Automatizado E2E', () => {

  Cypress.on('uncaught:exception', () => false);

  beforeEach(() => {
    cy.task('getSecrets').then((secrets: any) => {
      loginPage.loginSession(secrets.email, secrets.password);
      cy.visit('/');
      cy.url().should('not.include', '/login');
      cy.validarSessao();
    });
  });

  it('Deve validar os dados do perfil', () => {
    cy.task('getSecrets').then((secrets: any) => {
      cy.visit(`/${secrets.username}`);
      cy.get('.p-nickname')
        .should('exist')
        .and('not.be.empty')
        .and('contain.text', secrets.username);
    });
  });

  it('Deve navegar e interagir com repositórios', () => {
    cy.task('getSecrets').then((secrets: any) => {
      cy.visit(`/${secrets.username}`);
      repoPage.navegarParaRepositorios();
      repoPage.acessarRepositorioAleatorio();
      repoPage.acessarPullRequests();
      cy.url().should('include', '/pulls');
    });
  });

  it('Deve criar um novo repositório utilizando XPath', () => {
    const nomeDinamico = `projeto-portlouis-${Date.now()}`;
    cy.visit('/');
    cy.validarSessao();
    cy.visit('/new');
    repoPage.criarNovoRepo(nomeDinamico);
    cy.url().should('include', nomeDinamico);
    cy.get('a, strong').contains(nomeDinamico).should('be.visible');
  });

  it('Deve realizar o logout com sucesso', () => {
    profilePage.efetuarLogout();
  });
});

