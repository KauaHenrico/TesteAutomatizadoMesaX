/// <reference types="cypress" />
beforeEach(() => {
    
    cy.visit("https://mesax-dev.vercel.app/login")
    
    })
// Cenário de Teste 01 - Visualização Geral de Clientes:
// Dado que existem clientes cadastrados no sistema
// Quando eu acesso a tela de visualização geral de clientes
// Então devo ver a lista completa de clientes com seus detalhes (nome, data de cadastro, quantidade de compras)

// Cenário de Teste 02 - Filtro por Clientes que Mais Compram:
// Dado que existem clientes cadastrados com diferentes históricos de compras
// Quando eu aplico o filtro "Clientes que mais compram"
// Então devo ver a lista ordenada dos clientes baseada em suas compras realizadas

// Cenário de Teste 03 - Pesquisa por Cliente pelo Nome:
// Dado que existem clientes cadastrados no sistema
// Quando eu pesquiso por um nome de cliente específico
// Então devo ver apenas os clientes correspondentes ao nome pesquisado

// Cenário de Teste 04 - Importação de Dados de Clientes:
// Dado que tenho um arquivo com dados de clientes para importar
// Quando eu realizo a importação desses dados
// Então os novos clientes devem ser integrados corretamente à lista de clientes

// Cenário de Teste 05 - Cadastro de Cliente com Preenchimento Automático do Endereço via CEP:
// Dado que estou na tela de cadastro de clientes
// Quando eu preencho o campo de CEP
// Então os campos de endereço (rua, bairro, estado, cidade) devem ser preenchidos automaticamente corretamente

// Cenário de Teste 06 - Cadastro de Cliente com Dados Válidos:
// Dado que estou na tela de cadastro de clientes
// Quando eu preencho todos os campos obrigatórios corretamente
// E escolho uma opção da lista "Onde conheceu"
// E seleciono um gênero da lista pré-definida
// E confirmo o cadastro
// Então o cliente deve ser cadastrado com sucesso no sistema

// Cenário de Teste 07 - Cadastro de Cliente com Dados Inválidos:
// Dado que estou na tela de cadastro de clientes
// Quando eu preencho campos obrigatórios com dados inválidos
// E confirmo o cadastro
// Então o sistema deve exibir mensagens de erro indicando campos inválidos

// Cenário de Teste 08 - Redirecionamento para Cadastro de Cliente Inexistente:
// Dado que o cliente não possui uma conta registrada no sistema
// Quando tento fazer login com um usuário e senha válidos
// Então o sistema redireciona para a página de cadastro de clientes
// E informa que a conta não existe no sistema

describe('cadastro de usuarios', () => {
    it('Visualização Geral de Clientes', () => {
        login("1234@gmail.com", "32451825Kaua.");
        //cpf deve ser um numero variavel
        criarUsuario("kaua henrico", "97546000", "06067370220", "55981166578", "kaua@gmail.com", "Masculino", "2003-05-16", "Google" );
        //verificar se o usuario foi criado
        cy.contains("Clientes")
        


});
//     it('Filtro por Clientes que Mais Compram', () => {
// });
// it('Pesquisa por Cliente pelo Nome', () => {
// });
// it('Importação de Dados de Clientes', () => {
// });
// it('Cadastro de Cliente com Preenchimento Automático do Endereço via CEP', () => {
// });
// it('Cadastro de Cliente com Dados Válidos', () => {
// });
// it('Cadastro de Cliente com Dados Inválidos', () => {
// });
// it('Redirecionamento para Cadastro de Cliente Inexistente', () => {
// });

    });

function login(email, senha){
    cy.get('[name="email"]').type(email)
    cy.get('[name="password"]').type(senha)
    cy.get('.sc-gsTDqH').click();
}

function criarUsuario(nome, cep, cpf, telefone, email, genero, dataNascimento, ondeConheceu){
    cy.contains("Clientes").click();
        cy.contains(" Adicionar novo").click();
        cy.get('[name="name"]').type(nome);
        cy.get('[name="address.cep"]').type(cep)
        .wait(1000);
        cy.get('[name="cpf"]').type(cpf);
        cy.get('[name="phone"]').type(telefone);
        cy.get('[name="email"]').type(email);
        cy.get(':nth-child(6) > .sc-dQpIV > .sc-kEjbdu > .aresui-dropdown-children > .aresui-select-select > .aresui-select-current')
        .click()
        cy.contains(genero)
        .click();
        cy.get('[name="birthDate"]').type(dataNascimento);
        cy.get(':nth-child(5) > .sc-dQpIV > .sc-kEjbdu > .aresui-dropdown-children > .aresui-select-select').click()
        cy.contains(ondeConheceu).click();
        cy.contains(" Salvar").click();
}