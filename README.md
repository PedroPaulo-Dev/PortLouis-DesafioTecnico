# GitHub Automation Suite - E2E & Performance 🚀

Este projeto contém uma suíte de testes automatizados para o GitHub, cobrindo fluxos críticos de autenticação, navegação em repositórios, criação de recursos e testes de performance.

## 🛠️ Tecnologias Utilizadas

- **Cypress**: Testes de ponta a ponta (E2E).
- **K6**: Testes de performance e carga.
- **TypeScript**: Linguagem base para maior segurança e tipagem.
- **Cypress-XPath**: Suporte para identificação de elementos via XPath.
- **Dotenv**: Gerenciamento de variáveis de ambiente e segredos.



## 📄 Documentação Complementar

Para uma visão detalhada da estratégia e do conhecimento técnico aplicado, consulte os documentos abaixo:

- [📄 Questionário Técnico (Git & Processos)](docs/questionario-tecnico.md) - Respostas detalhadas sobre fluxo de trabalho, resolução de conflitos e CI/CD.

- [📄 Questionário Técnico (Git & Processos) - PDF](docs/Questionario_QA_Junior_Pedro_Paulo.pdf)

- [📋 Plano de Casos de Teste](docs/Test_Cases.md) - Mapeamento dos cenários E2E validados nesta suíte.



## 🏗️ Arquitetura do Projeto (Clean Code)

O projeto segue o padrão **Page Objects Model (POM)** para garantir a manutenção e legibilidade do código:

- `cypress/support/pages`: Contém as classes que representam as páginas (Encapsulamento de seletores e ações).
- `cypress/e2e`: Contém os cenários de teste escritos de forma declarativa.
- `cypress/support/commands.ts`: Comandos customizados para validação de sessão e login.

> **Nota:** Seguindo os princípios de *Clean Code*, o código foi escrito para ser autoexplicativo, evitando comentários desnecessários e focando em nomes de métodos e variáveis semânticos.

---

## ⚙️ Configuração do Ambiente

 **Clone o repositório:**
   ```bash
   git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
   cd seu-repositorio

   Instale as dependências:

    Bash
    npm install

    Variáveis de Ambiente:
    Copie o arquivo .env.example para um novo arquivo chamado .env e preencha com suas credenciais do GitHub.

    Snippet de código
    GITHUB_EMAIL=seu_email@exemplo.com
    GITHUB_PASSWORD=sua_senha_segura
    GITHUB_USERNAME=seu_usuario_github

    Certifique-se de que o arquivo .env está no seu .gitignore.

🧪 Executando os Testes
    1. Cypress (E2E)
    Para abrir a interface do Cypress:

    Bash
    npx cypress open
    Para rodar os testes em modo headless (terminal):

    Bash
    npx cypress run
    Cenários validados:

    Login com persistência de sessão.

    Validação de dados do perfil.

    Navegação dinâmica entre repositórios e Pull Requests.

    Criação de repositório utilizando XPath.

    Fluxo completo de Logout.

K6 (Performance)
O projeto inclui um script de teste de performance desenvolvido em JavaScript utilizando o k6. O foco deste teste é medir a latência e o tempo de resposta (TTFB - Time to First Byte) dos endpoints críticos do GitHub.

Pré-requisitos
Ter o k6 instalado no sistema.

Como Executar
Bash
k6 run performance/github_perf.js
Métricas e Critérios de Aceite (Thresholds)
O teste foi configurado com Thresholds para garantir que a performance esteja dentro dos padrões aceitáveis:

Status Code: 100% das requisições devem retornar 200 OK.

p(95) < 2000ms: 95% das requisições devem ser respondidas em menos de 2 segundos.

Checks: Validação de sucesso para os fluxos de:

GET /login

GET /{user}?tab=repositories

GET /logout

Nota Técnica: O k6 realiza testes a nível de protocolo (HTTP), permitindo medir a performance de forma leve e escalável, sem o overhead de renderização de interface (DOM).