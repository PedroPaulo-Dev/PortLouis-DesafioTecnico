class LoginPage {
  private inputEmail = '#login_field';
  private inputPassword = '#password';
  private btnSubmit = 'input[value="Sign in"]';

  acessar() {
    cy.visit('/login');
    cy.url().should('include', '/login');
    cy.get(this.inputEmail).should('be.visible');
  }

  submeter() {
    cy.get(this.btnSubmit).should('be.visible').click();
    cy.get(this.btnSubmit).should('not.exist');
  }

  preencherLogin(email: string, pass: string) {
    cy.get(this.inputEmail).should('be.visible').type(email);
    cy.get(this.inputPassword).should('be.visible').type(pass, { log: false });
    cy.get(this.inputEmail).should('have.value', email);
    if (!email) throw new Error("Email não fornecido para o login");
    if (!pass) throw new Error("Senha não fornecida para o login");
  }

  loginSession(email: string, pass: string) {
    cy.session(email, () => {
      cy.on('uncaught:exception', () => false);
      this.acessar();
      this.preencherLogin(email, pass);
      this.submeter();
    },
      {
        validate() {
          cy.getCookie('user_session').should('have.property', 'value').and('not.be.empty');
        },
        cacheAcrossSpecs: true
      });
  }
}

export default new LoginPage();