class RepoPage {
  get tabRepositories() { return cy.get('[data-tab-item="repositories"]'); }
  get repoLinks() { return cy.get('a[itemprop="name codeRepository"], [data-testid="listitem-title-link"]'); }
  get tabPullRequests() { return cy.get('[data-tab-item="pull-requests"]'); }

  private get xpathInputNome() { return '//*[@id="repository-name-input"]'; }
  private get xpathBtnCriar() { return '//button[contains(., "Create repository")]'; }
  navegarParaRepositorios() {
    this.tabRepositories.filter(':visible').click();
    cy.url().should('include', 'tab=repositories');
  }

  acessarRepositorioAleatorio() {
    this.repoLinks.should('be.visible').then(($links) => {
      const total = $links.length;
      const randomIndex = Math.floor(Math.random() * total);

      cy.log(`Total de repositórios encontrados: ${total}. Acessando o índice: ${randomIndex}`);

      cy.wrap($links).eq(randomIndex).click();
    });
  }

  acessarPullRequests() {
    this.tabPullRequests
      .should('exist')
      .should('be.visible')
      .click({ force: true });
  }


  criarNovoRepo(nomeRepo: string) {
    cy.xpath(this.xpathInputNome)
      .should('be.visible')
      .type(nomeRepo);


    cy.wait(2000);

    cy.xpath(this.xpathBtnCriar)
      .should('be.enabled')
      .click();
  }
}

export default new RepoPage();