# GitHub Automation Suite - E2E & Performance 🚀

Projeto de automação de testes focado em excelência e estabilidade, cobrindo desde a jornada do usuário até o comportamento do sistema sob carga. Desenvolvido com Cypress e K6, este desafio reflete o compromisso com a entrega de software robusto, onde a qualidade é tratada como um pilar estratégico do desenvolvimento.

## 📦 Tecnologias e Dependências Principais

Abaixo estão as tecnologias dominadas e aplicadas neste projeto:

* **Linguagens:**
    * **TypeScript:** Utilizado na suíte E2E para tipagem de objetos e maior segurança de código.
    * **JavaScript (ES6+):** Utilizado nos scripts de performance do K6.

* **Frameworks e Plugins:**
    * **Cypress:** Engine principal de automação de interface.
    * **Cypress-XPath:** Extensão necessária para o suporte aos seletores XPath utilizados nas Specs.
    * **Dotenv:** Para o gerenciamento seguro de massa de dados e tokens.

## 📄 Documentação Complementar

Para uma visão detalhada da estratégia e do conhecimento técnico aplicado, consulte os documentos abaixo:

- [📄 Questionário Técnico (Git & Processos)](docs/questionario-tecnico.md)
- [📄 Questionário Técnico (Git & Processos) - PDF](docs/Questionario_QA_Junior_Pedro_Paulo.pdf)
- [📋 Plano de Casos de Teste](docs/Test_Cases.md) - Mapeamento dos cenários E2E validados nesta suíte.

## 🏗️ Arquitetura do Projeto (Clean Code)

O projeto segue o padrão **Page Objects Model (POM)** para garantir a manutenção e legibilidade do código:

- `cypress/support/pages`: Contém as classes que representam as páginas (Encapsulamento de seletores e ações).
- `cypress/e2e`: Contém os cenários de teste escritos de forma declarativa.
- `cypress/support/commands.ts`: Comandos customizados para validação de sessão e login.

> **Nota:** Seguindo os princípios de *Clean Code*, o código foi escrito para ser autoexplicativo, evitando comentários desnecessários e focando em nomes de métodos e variáveis semânticos.

---

## 🛠️ Pré-requisitos para Execução

Para garantir a reprodução fiel dos testes, certifique-se de ter o ambiente configurado com:

* **Node.js (v14.0 ou superior):** Essencial para rodar o Cypress e gerenciar os pacotes npm.
* **Gerenciador de Pacotes (NPM ou Yarn):** Para instalação das dependências listadas no `package.json`.

> **Nota:** Este projeto foi desenvolvido e validado em ambiente Windows. A execução em outros sistemas operacionais é possível, mas pode exigir comandos de instalação específicos para as ferramentas globais.

* **Git:** Para clonagem do repositório.
* **IDE (Recomendado VS Code):** Para visualização da estrutura de pastas e arquivos `.ts` e `.js`.
* **Variáveis de Ambiente (.env):** É obrigatório configurar as credenciais de acesso conforme o modelo fornecido, caso contrário, os fluxos de autenticação irão falhar.
* `npm install dotenv`

* **K6 (Instalação Global):** O K6 deve estar instalado no seu Sistema Operacional para ser executado via terminal.

```
**[Guia de Instalação K6]**
Abra o PowerShell ou CMD e execute:
winget install k6 --source winget

*Após a conclusão da instalação, feche e abra novamente o seu terminal ou o VS Code.*

> ⚠️ **Atenção:** O K6 deve ser instalado globalmente no sistema operacional para que o comando k6 run funcione. Ele não é instalado via npm install.
```



## 🚀 Guia Rápido de Instalação

1. **Clone o repositório:**
```
git clone [https://github.com/PedroPaulo-Dev/PortLouis-DesafioTecnico](https://github.com/PedroPaulo-Dev/PortLouis-DesafioTecnico)
```

2. **Acesse a raiz do projeto:**

```
cd PortLouis-DesafioTecnico

```

3. **Instale as dependências:**

```
npm install

```

4. **Variáveis de Ambiente:**
Copie o arquivo `.env.example` para um novo arquivo chamado `.env` e preencha com suas credenciais do GitHub.

```env
GITHUB_EMAIL=seu_email@exemplo.com
GITHUB_PASSWORD=sua_senha_segura
GITHUB_USERNAME=seu_usuario_github

```

*Certifique-se de que o arquivo .env está no seu .gitignore.*

---

## 🧪 Executando os Testes

### 1. Cypress (E2E)

Para abrir a interface do Cypress:

```bash
npx cypress open

```

Para rodar os testes em modo headless (terminal):

```bash
npx cypress run

```

**Cenários validados:**

* Login com persistência de sessão.
* Validação de dados do perfil.
* Navegação dinâmica entre repositórios e Pull Requests.
* Criação de repositório utilizando XPath.
* Fluxo completo de Logout.

### 2. K6 (Performance)

O projeto inclui um script de teste de performance desenvolvido em JavaScript utilizando o k6. O foco deste teste é medir a latência e o tempo de resposta (TTFB - Time to First Byte) dos endpoints críticos do GitHub.

**Como Executar:**

```bash
k6 run performance/github_perf.js

```

**Métricas e Critérios de Aceite (Thresholds):**
O teste foi configurado com Thresholds para garantir que a performance esteja dentro dos padrões aceitáveis:

* **Status Code:** 100% das requisições devem retornar 200 OK.
* **p(95) < 2000ms:** 95% das requisições devem ser respondidas em menos de 2 segundos.
* **Checks:** Validação de sucesso para os fluxos de:
* `GET /login`
* `GET /{user}?tab=repositories`
* `GET /logout`



> **Nota Técnica:** O k6 realiza testes a nível de protocolo (HTTP), permitindo medir a performance de forma leve e escalável, sem o overhead de renderização de interface (DOM).

```