# language: pt

Funcionalidade: Autenticação e Navegação no GitHub
  Como um usuário registrado
  Quero conseguir me autenticar e navegar pelos meus repositórios
  Para gerenciar meus projetos com segurança

  Contexto: 
    Dado que eu acesso a página inicial do GitHub "https://www.github.com"

  Cenário: Autenticação bem-sucedida e validação de perfil
    Quando eu clico no botão de login
    E preencho o e-mail "qapedropaulo@gmail.com" e a senha "qaprocessoseletivo12?"
    E clico em "Sign in"
    Então sou redirecionado para a URL esperada do painel de controle
    E ao acessar a URL do meu perfil, devo visualizar meu nome corretamente abaixo da foto de perfil

  Cenário: Navegação e interação com repositórios
    Dado que eu estou logado e na página do meu perfil
    Quando eu navego até a aba "Repositories"
    E acesso um repositório aleatório da lista
    E clico na aba "Pull Requests"
    Então os pull requests do repositório devem ser exibidos corretamente

  Cenário: Criação de novo repositório (via XPath)
    Dado que eu inicio o fluxo de criação de um novo repositório
    Quando eu preencho os dados necessários utilizando seletores XPath
    Então o repositório deve ser criado com sucesso e eu devo ser levado à sua tela inicial

  Cenário: Logout com sucesso
    Dado que eu clico na foto do perfil no canto superior direito
    Quando eu seleciono a opção "Sign out"
    Então devo ser deslogado da conta com sucesso
    E validado que não tenho mais acesso à área logada