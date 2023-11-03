/// <reference types="cypress" />
beforeEach(() => {
    
    cy.visit("https://mesax-dev.vercel.app/login")
    
    })

describe('login', () => {
    it('Login Vendedor com Sucesso dentro do Horário Permitido:', () => {
        login("kaua@gmail.com", "32451825Kaua.", "1234.")
        cy.contains("Boas-vindas ao seu painel de controle").should('be.visible');
    })

    it('Login Vendedor com sucesso fora do horário permitido:', () => {
        login("kaua@gmail.com", "32451825Kaua.", "1234.")
        cy.contains("Boas-vindas ao seu painel de controle").should('be.visible');
    })

    it('Login Vendedor com Usuário Inválido', () => {
        login("kaua@mail.com", "32451825Kaua.", "1234.")
        cy.contains("O usuário não foi encontrado ou não existe.").should('be.visible');
    })

    it('Redirecionamento para Cadastro de Vendedor', () => {
    login("kaua123132@mail.com", "32451825Ka", "1234.")
    cy.contains("Crie sua conta na MesaX").should('be.visible');
    })

    it('login com email certa e senha erradada', () => {
        login("kaua@gmail.com", "32451825Ka", "1234.")
        cy.contains("Senha incorreta.").should('be.visible');
    })

    it('login com email errado e senha certa', () => {
        login("kau@gmail.com", "32451825Kaua.", "1234.")
        cy.contains("O usuário não foi encontrado ou não existe.").should('be.visible');
    })

    it('login com código errado', () => {
        login("kaua@gmail.com", "32451825Kaua.", "12345.")    
        cy.contains("Código de autenticação inválido.").should('be.visible');
    }
    );
});

function login(email, senha, codigo){
    cy.get('[name="user"]').type(email)
    cy.get('[name="password"]').type(senha)
    cy.get('[name="code"]').type(codigo)
    cy.get('.sc-guDMob').click()
}