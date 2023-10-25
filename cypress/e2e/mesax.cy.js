/// <reference types="cypress" />

beforeEach(() => {
cy.visit("https://mesax-dev.vercel.app/login")
})



describe('Cadastro', () => {
    // it('Cadastro com Conta Google', () => {

    // });

    // it('Cadastro com Conta Apple', () => {

    // });

    // it('cadastro com facebook', () => {

    // });

    it('cadastro com e-mail', () => {

    //redirecionamento para criar a
    cy.contains('Crie uma agora').click();
    criarConta()
    });

    // it('cadastro com Senha Inválida', () => {

    // });

    // it('cadastro com CNPJ Inválido', () => {

    // });

    // it('Cadastro com E-mail Já Registrado', () => {

    // });

    // it('cadastro com Endereço Inválido', () => {

    // });

    // it('cadastro com Telefone Inválido', () => {

    // });

    // it('cadastro com Nome e Sobrenome em Branco', () => {

    // });

    // it('cadastro com CNPJ em Formato Inválido', () => {

    // });

});

function criarConta(){
    cy.get('[name="email"]').type('emailaleatorio@gmail.com');
    cy.get('[name="password"]').type('12345678');
    cy.get('[name="name"]').type('Kauã Henrico');
    //endereço
    cy.get('[name="address.cep"]').type(97546000)
    .wait(1000)
    cy.get('[name="address.number"]').type(383)
    //Informações jurídicas e adicionais
    cy.get('[name="cnpj"]').type("09.624.496/0001-49")
    .wait(3000)
    cy.get('[name="tradingName"]').type('YouDevelop')
    cy.get('.aresui-checkbox-wrapper').click()
}