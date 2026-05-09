class ProfilePage {
  get btnAvatar() { return cy.get('[data-testid="github-avatar"]').first(); }

  private get xpathBtnSignOut() {
    return '//span[contains(text(), "Sign out")]/ancestor::a | //button[contains(., "Sign out")]';
  }

  private get xpathConfirmSignOut() {
    return '(//input[@value="Sign out"] | //button[contains(., "Sign out")])[1]';
  }

  efetuarLogout() {
    cy.scrollTo('top');
    this.btnAvatar.should('be.visible').click({ force: true });

    cy.xpath(this.xpathBtnSignOut).should('be.visible').click({ force: true });

    cy.url().should('include', '/logout');

    cy.xpath(this.xpathConfirmSignOut)
      .filter(':visible')
      .first()
      .click();

    cy.get('a[href="/login"]').should('be.visible');
  }
}

export default new ProfilePage();