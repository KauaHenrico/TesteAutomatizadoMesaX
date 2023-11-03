/// <reference types="cypress" />
beforeEach(() => {
    cy.visit("https://mesax-dev.vercel.app/login")
});

describe('Cadastro', () => {
    const emailPrefix = 'testemail';
    const timestamp = new Date().getTime();
    const email = `${emailPrefix}${timestamp}@example.com`;

    it('Cadastro com E-mail', () => {
        criarConta(email, "Senha123.", "Nome de Teste", "12345000", "12.345.678/9012-34");
        cy.get('[name="tradingName"]').type("Youdevelop");
        cy.get('.buttons > .sc-abe2ebb9-0 > .sc-guDMob').click({ force: true }).wait(3000);
        cy.contains('Sua conta foi criada com sucesso!').should('be.visible');
    });

    it('Cadastro com Senha Inválida', () => {
        criarConta(email, "12345", "Nome de Teste", "12345000", "12.345.678/9012-34");
        cy.get('[name="tradingName"]').type("Youdevelop");
        cy.get('.buttons > .sc-abe2ebb9-0 > .sc-guDMob').click({ force: true }).wait(3000);
        cy.contains("A senha deve conter pelo menos 8 caracteres").should('be visible');
    });

    it('Cadastro com CNPJ Inválido', () => {
        criarConta(email, "Senha123.", "Nome de Teste", "12345000", "00.000.000/0000-00");
        cy.get('[name="tradingName"]').type("Youdevelop");
        cy.get('.buttons > .sc-abe2ebb9-0 > .sc-guDMob').click({ force: true }).wait(3000);
        cy.contains("O CNPJ é inválido").should('be.visible');
    });

    it('Cadastro com E-mail Já Registrado', () => {
        criarConta("Teste@gmail.com", "Senha123.", "Nome de Teste", "12345000", "12.345.678/9012-34");
        cy.get('[name="tradingName"]').type("Youdevelop");
        cy.get('.buttons > .sc-abe2ebb9-0 > .sc-guDMob').click({ force: true }).wait(3000);
        cy.contains("Já existe uma conta com o endereço de email fornecido").should('be.visible');
    });

    it('Cadastro com Endereço Inválido', () => {
        criarConta(email, "Senha123.", "Nome de Teste", "12345000", "12.345.678/9012-34");
        cy.get('[name="tradingName"]').type("Youdevelop");
        cy.get('.buttons > .sc-abe2ebb9-0 > .sc-guDMob').click({ force: true }).wait(3000);
        cy.contains("O email fornecido não é válido").should('be.visible');
    });

    it('Cadastro com Telefone Inválido', () => {
        criarConta(email, "Senha123.", "Nome de Teste", "12345000", "12.345.678/9012-34");
        cy.get('[name="tradingName"]').type("Youdevelop");
        cy.get('[name="phone"]').clear().type("123456789");
        cy.get('.buttons > .sc-abe2ebb9-0 > .sc-guDMob').click({ force: true }).wait(3000);
        cy.contains("O telefone fornecido não é válido").should('be.visible');
    });

    it('Cadastro com Nome e Sobrenome em Branco', () => {
        criarConta(email, "Senha123.", "Nome de Teste", "12345000", "12.345.678/9012-34");
        cy.get('[name="name"]').clear();
        cy.get('[name="tradingName"]').type("Youdevelop");
        cy.get('.buttons > .sc-abe2ebb9-0 > .sc-guDMob').click({ force: true }).wait(3000);
        cy.contains("O nome é obrigatório").should('be.visible');
    });

    it('Cadastro com CNPJ em Formato Inválido', () => {
        criarConta(email, "Senha123.", "Nome de Teste", "12345000", "0");
        cy.get('[name="tradingName"]').type("Youdevelop");
        cy.get('.buttons > .sc-abe2ebb9-0 > .sc-guDMob').click({ force: true }).wait(3000);
        cy.contains("O CNPJ informado é inválido").should('be.visible');
    });

    it('Cadastro com Senha em Branco', () => {
        criarConta(email, "", "Nome de Teste", "12345000", "12.345.678/9012-34");
        cy.get('[name="tradingName"]').type("Youdevelop");
        cy.get('.buttons > .sc-abe2ebb9-0 > .sc-guDMob').click({ force: true }).wait(3000);
        cy.contains("A senha deve conter pelo menos 8 caracteres").should('be.visible');
    });

    it('Forçar cadastro apertando no botão de criar conta várias vezes', () => {
        criarConta("Emaildeteste", "Senha123.", "Nome de Teste", "12345000", "12.345.678/9012-34");
        cy.get('[name="tradingName"]').type("Youdevelop");

        // Defina o número de vezes que deseja clicar no botão.
        const numberOfClicks = 100;

        // Use um loop para clicar no botão várias vezes.
        for (let i = 0; i < numberOfClicks; i++) {
            cy.get('.buttons > .sc-abe2ebb9-0 > .sc-guDMob').click({ force: true });
        }
        cy.contains("O email fornecido não é válido").should('be.visible');
    });

    it('Nome com mais de 300 caracteres', () => {
        criarConta(email, "Senha123.", "A".repeat(301), "12345000", "12.345.678/9012-34");
        cy.get('.buttons > .sc-abe2ebb9-0 > .sc-guDMob').click({ force: true });
    });
});


function criarConta(email, senha, nome, cep, cnpj) {
    // Clica no botão "Crie uma agora" para iniciar o processo de criação de conta.
    cy.contains('Crie uma agora').click();
    // Preenche os campos de e-mail, senha e nome com dados mockados.
    cy.get('[name="email"]').type(email);
    cy.get('[name="password"]').type(senha);
    cy.get('[name="name"]').type(nome);
    // Preenche o campo de CEP e número de endereço.
    cy.get('[name="address.cep"]').type(cep).wait(3000);
    cy.get('[name="address.number"]').type(383);
}

