/// <reference types="cypress" />

beforeEach(() => {
  cy.viewport(1920, 1080); // Correção na definição do viewport
  cy.visit("https://mesax-dev.vercel.app/login");
});

describe('Controle de Fornecedores', () => {
  it('Visualização Geral de Fornecedores - Nenhum ou um Fornecedor', () => {
    login("1234@gmail.com", "32451825Kaua.");
    cy.wait(3000);
    cy.contains("Fornecedores").click();
     cy.get('.rows > .sc-e8b6d57f-0 > .row').should('exist');
    // Verifica se há fornecedores na lista ou se está vazia
    cy.get('.rows > .sc-e8b6d57f-0 > .row').then($rows => {
      const rowCount = $rows.length;
      if (rowCount === 0) {
        cy.contains("Nenhum dado encontrado para ser mostrado").should('be.visible');
      } else {
        cy.get('.rows > .sc-e8b6d57f-0 > .row').eq(0).should('be.visible'); // Verifica se o nome 'teste da silva' está presente no primeiro fornecedor da lista
      }
    });
  });


  it('Pesquisa por Nome do Fornecedor', () => {
    login("1234@gmail.com", "32451825Kaua.");
    cy.wait(3000);
    cy.contains("Fornecedores").click();
  
    let nomeFornecedor;
    cy.get('.column-name > :nth-child(1) > :nth-child(1) > span').invoke('text').then(nome => {
      nomeFornecedor = nome.trim();
      cy.get('input').type(nomeFornecedor);
      cy.contains('.rows', nomeFornecedor).should('exist');
    });
  });
  

  it('Pesquisa por CNPJ do Fornecedor', () => {
    // Cenário: Pesquisa por CNPJ do Fornecedor
    // Adicione o código Cypress para simular o cenário descrito
    login("1234@gmail.com", "32451825Kaua.");
    cy.wait(3000);
    cy.contains("Fornecedores").click();
    
    let cnjpDoFornecedor;
    cy.get('.column-cnpj > :nth-child(1) > :nth-child(1) > span').invoke('text').then(nome => {
      cnjpDoFornecedor = nome.trim();
      cy.get('input').type(cnjpDoFornecedor);
      cy.contains('.rows', cnjpDoFornecedor).should('exist');
    });
  })

  it('Nenhum Fornecedor Cadastrado', () => {
    // Cenário: Nenhum Fornecedor Cadastrado
    // Adicione o código Cypress para simular o cenário descrito
  })

  it('Pesquisa por Nome Inexistente', () => {
    // Cenário: Pesquisa por Nome Inexistente
    login("1234@gmail.com", "32451825Kaua.");
    cy.wait(3000);
    cy.contains("Fornecedores").click();
  
    // Inserindo um nome que não existe na lista de fornecedores
    const nomeInexistente = 'Nome Que Não Existe';
    cy.get('input').type(nomeInexistente);
  
    // Verificando se a mensagem de nenhum dado encontrado é exibida
    cy.contains('.rows', 'Nenhum dado encontrado para ser mostrado').should('be.visible');
    // Verificando se o nome inexistente não está presente nos resultados da pesquisa
    cy.contains('.rows', nomeInexistente).should('not.exist');
  });
  

  it('Pesquisa por CNPJ Inexistente', () => {
    // Cenário: Pesquisa por CNPJ Inexistente
    login("1234@gmail.com", "32451825Kaua.");
    cy.wait(3000);
    cy.contains("Fornecedores").click();
  
    // Inserindo um CNPJ que não existe na lista de fornecedores
    const cnpjInexistente = '99.999.999/9999-99'; // Coloque o CNPJ inexistente desejado
    cy.get('input').type(cnpjInexistente);
  
    // Verificando se a mensagem de nenhum dado encontrado é exibida
    cy.contains('.rows', 'Nenhum dado encontrado para ser mostrado').should('be.visible');
    // Verificando se o CNPJ inexistente não está presente nos resultados da pesquisa
    cy.contains('.rows', cnpjInexistente).should('not.exist');
  });
  

  it('Criação de Pedido de Estoque', () => {
    // Cenário: Criação de Pedido de Estoque
    // Adicione o código Cypress para simular o cenário descrito
  })

  it('Criação de Pedido de Estoque sem Produto Específico', () => {
    // Cenário: Criação de Pedido de Estoque sem Produto Específico
    // Adicione o código Cypress para simular o cenário descrito
  })

  it('Cadastro de Novo Fornecedor com Dados Obrigatórios', () => {
    login("1234@gmail.com", "32451825Kaua.");
    cy.wait(3000);
    cy.contains("Fornecedores").click();
  
    cy.contains(" Adicionar novo").click();
  
    // Preenchimento dos dados obrigatórios
    cy.get('[name="name"]').type("Nome do Fornecedor");
    cy.get('[name="address.cep"]').type("97546000");
  
    // Salvar o novo fornecedor
    cy.contains("Salvar").click();
  });
  

  it('Cadastro de Novo Fornecedor com Dados Opcionais', () => {
    login("1234@gmail.com", "32451825Kaua.");
    cy.wait(3000);
    cy.contains("Fornecedores").click();
  
    cy.contains(" Adicionar novo").click();
  
    // Preenchimento de alguns dados opcionais
    cy.get('[name="name"]').type("Nome do Fornecedor");
    cy.get('[name="address.cep"]').type("97546000");
    cy.get('[name="cnpj"]').type("09.624.496/0001-49");
    cy.get('[name="phone"]').type("12945678910");
    cy.get('[name="email"]').type("teste@teste.com");
    cy.get('[name="cpf"]').type("06067370220");
  
    // Salvar o novo fornecedor
    cy.contains("Salvar").click();
  });
  

  it('Cadastro de Novo Fornecedor com Dados Inválidos', () => {
    login("1234@gmail.com", "32451825Kaua.");
    cy.wait(3000);
    cy.contains("Fornecedores").click();
  
    cy.contains(" Adicionar novo").click();
  
    // Preenchimento de campos obrigatórios com dados inválidos
    cy.get('[name="name"]').type("Nome Inválido");
    cy.get('[name="address.cep"]').type("Endereço Inválido");
  
    // Salvar o novo fornecedor
    cy.contains("Salvar").click();
  
    // Verificação de mensagens de erro após tentativa de cadastro
    cy.contains("Erro: Dados inválidos").should('be.visible');
  });
  

  it('Cadastro de Novo Fornecedor sem Dados Obrigatórios', () => {
    login("1234@gmail.com", "32451825Kaua.");
    cy.wait(3000);
    cy.contains("Fornecedores").click();
  
    cy.contains(" Adicionar novo").click();
  
    // Tentativa de salvar sem preencher dados obrigatórios
    cy.contains("Salvar").click();
  
    // Verificação de mensagens de erro após tentativa de cadastro
    cy.contains("Por favor, preencha todos os campos obrigatórios").should('be.visible');
  });
  
})

function login(email, senha){
  cy.get('[name="email"]').type(email)
  cy.get('[name="password"]').type(senha)
  cy.get('.sc-gsTDqH').click();
}