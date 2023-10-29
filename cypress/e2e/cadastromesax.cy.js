/// <reference types="cypress" />
beforeEach(() => {
    
cy.visit("https://mesax-dev.vercel.app/login")

})

describe('Cadastro', () => {
    const emailPrefix = 'teste';
    const timestamp = new Date().getTime();
    const email = `${emailPrefix}${timestamp}@example.com`;


    it('Cadastro com Conta Google', () => {

    }); 

    it('cadastro com e-mail', () => {
        criarConta(email, "32451825Kaua." , "kauã Teste", "97546000", "09.624.496/0001-49")
        cy.get('.buttons > .sc-abe2ebb9-0 > .sc-guDMob').click({force: true}).wait(3000)
        cy.contains('Sua conta foi criada com sucesso!').should('be.visible');
        
});
    it('cadastro com Senha Inválida', () => {
        criarConta(email, 12345 , "kauã Teste", "97546000", "09.624.496/0001-49")
        cy.get('.buttons > .sc-abe2ebb9-0 > .sc-guDMob').click({force: true}).wait(3000)
        cy.contains("A senha deve conter pelo menos 8 caracteres").should('be.visible');

    });

    it('cadastro com CNPJ Inválido', () => {
        criarConta(email, "32451825Kaua." , "kauã Teste", "97546000", "00.000.000/0000-00")
        cy.get('.buttons > .sc-abe2ebb9-0 > .sc-guDMob').click({force: true}).wait(3000)
        cy.contains("O CNPJ é inválido.").should('be.visible');
    });

    it('Cadastro com E-mail Já Registrado', () => {
        criarConta("kaua@gmail.com", "32451825Kaua." , "kauã Teste", "97546000", "09.624.496/0001-49")
        cy.get('.buttons > .sc-abe2ebb9-0 > .sc-guDMob').click({force: true}).wait(3000)

        cy.contains("Já existe uma conta com o endereço de email fornecido.").should('be.visible');
    });

     it('cadastro com Endereço Inválido', () => {
        criarConta("teste", "32451825Kaua." , "kauã Teste", "97546000", "09.624.496/0001-49")
        cy.get('.buttons > .sc-abe2ebb9-0 > .sc-guDMob').click({force: true}).wait(3000)
        cy.contains("O email fornecido não é válido.").should('be.visible');
     });

     it('cadastro com Telefone Inválido', () => {
        criarConta(email, "32451825Kaua." , "kauã Teste", "97546000", "09.624.496/0001-49")
        cy.get('[name="phone"]').clear().type("123456789")
        cy.get('.buttons > .sc-abe2ebb9-0 > .sc-guDMob').click({force: true}).wait(3000)
        cy.contains("O telefone fornecido não é válido.").should('be.visible');
    });

    it('cadastro com Nome e Sobrenome em Branco', () => {
        const nome = null;
        criarConta(email, "32451825Kaua." , nome, "97546000", "09.624.496/0001-49")
        cy.get('.buttons > .sc-abe2ebb9-0 > .sc-guDMob').click({force: true}).wait(3000)
        cy.contains("O nome é obrigatório.").should('be.visible');
    });

    it('cadastro com CNPJ em Formato Inválido', () => {
        criarConta(email, "32451825Kaua." , "kauã Teste", "97546000", "0")
        cy.get('.buttons > .sc-abe2ebb9-0 > .sc-guDMob').click({force: true}).wait(3000)
        cy.contains("O CNPJ informado é inválido").should('be.visible');
    });

    it('cadastro com Senha em Branco', () => {
        criarConta(email, "0" , "kauã Teste", "97546000", "09.624.496/0001-49")
        cy.get('.buttons > .sc-abe2ebb9-0 > .sc-guDMob').click({force: true}).wait(3000)
        cy.contains("A senha deve conter pelo menos 8 caracteres").should('be.visible');
    });

    it('forçar cadastro apertando no botão de criar conta várias vezes', () => {
        criarConta("kaua", "32451825Kaua.", "kauã Teste", "97546000", "09.624.496/0001-49");
      
        // Defina o número de vezes que deseja clicar no botão.
        const numberOfClicks = 100;
      
        // Use um loop para clicar no botão várias vezes.
        for (let i = 0; i < numberOfClicks; i++) {
          cy.get('.buttons > .sc-abe2ebb9-0 > .sc-guDMob').click({ force: true });
        }
        cy.contains("O email fornecido não é válido.").should('be.visible');
      });
      
      it('nome com mais de 300 caracteres', () => {
        criarConta("kaua123@gmail.com", "32451825Kaua.", "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", "97546000", "09.624.496/0001-49", "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
        cy.get('.buttons > .sc-abe2ebb9-0 > .sc-guDMob').click({ force: true });
    })
      
    
});

function criarConta(email,senha, nome, cep, cnpj ) {
    cy.contains('Crie uma agora').click();
    cy.get('[name="email"]').type(email);
    cy.get('[name="password"]').type(senha);
    cy.get('[name="name"]').type(nome);
    //endereço
    cy.get('[name="address.cep"]').type(cep)
    .wait(3000)
    cy.get('[name="address.number"]').type(383)
    //Informações jurídicas e adicionais
    cy.get('[name="cnpj"]').type(cnpj)
    .wait(4000)
    cy.get('.aresui-checkbox-wrapper').click()
    .wait(3000)
    
}

function login(email, senha){
    cy.get('[name="email"]').type(email);
    cy.get('[name="password"]').type(senha);
    cy.get('.buttons > .sc-abe2ebb9-0 > .sc-guDMob').click()
}