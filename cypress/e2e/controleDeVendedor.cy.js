describe('Controle de vendedor', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit("https://mesax-dev.vercel.app/login");
  });

  it('Acesso ao Cadastro', () => {
    // Adicione os comandos Cypress para acessar a área de cadastro de funcionários
    login("1234@gmail.com", "32451825Kaua.");
    cy.wait(3000);
    cy.contains("Funcionários").click();  
    cy.contains("Adicionar novo").click();

    //formulário
    cy.get('[name="name"]').type("kaua henrico");
    cy.get('[name="cpf"]').type("06067370220");
    cy.get('[name="email"]').type("teste@gmail.com");
    cy.get('[name="password"]')
    .clear()
    .type("12345678");
    cy.get('[name="position"]').type("Vendedor");
  });

  // it('Preenchimento dos Campos Obrigatórios', () => {
  //   // Adicione os comandos Cypress para preencher os campos obrigatórios
  //   // para um novo funcionário e realizar o cadastro
  // });

  // it('Cadastro sem Seleção de Permissões', () => {
  //   // Adicione os comandos Cypress para preencher os campos obrigatórios
  //   // para um novo funcionário sem selecionar nenhuma permissão
  //   // Verifique se o sistema solicita a seleção de ao menos uma permissão
  // });

  // it('Preenchimento com Dados Inválidos', () => {
  //   // Adicione os comandos Cypress para preencher os campos com informações inválidas
  //   // para um novo funcionário e verifique se o sistema exibe mensagens de erro
  // });

  // it('Cadastro de Funcionário com Email Inválido', () => {
  //   // Adicione os comandos Cypress para tentar cadastrar um novo funcionário
  //   // com um email inválido e verifique se o sistema impede o cadastro
  // });

  // it('Cadastro de Funcionário com CPF Inválido', () => {
  //   // Adicione os comandos Cypress para tentar cadastrar um novo funcionário
  //   // com um CPF inválido e verifique se o sistema impede o cadastro
  // });

  // it('Permissões para Módulos de Acesso', () => {
  //   // Adicione os comandos Cypress para definir as permissões de acesso
  //   // para um novo funcionário e verifique se as permissões foram aplicadas corretamente
  // });
});

function login(email, senha){
  cy.get('[name="email"]').type(email)
  cy.get('[name="password"]').type(senha)
  cy.get('.sc-gsTDqH').click();
}