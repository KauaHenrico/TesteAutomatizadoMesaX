/// <reference types="cypress" />
beforeEach(() => {
    
    cy.visit("https://mesax-dev.vercel.app/login")
    
    })

describe('edicao da loja completa', () => {
    it('edição de nome da loja', () => {
        edicaoDeLoja("kaua@gmail.com", "32451825Kaua.", "1234.");
        cy.get('[name="address.cep"]')
        .clear()
        .type("12345678");
        cy.contains(' Salvar').click();
        cy.contains('Dados da loja atualizado com sucesso!').should('exist');
    })

    it('edição de nome da loja', () => {
        edicaoDeLoja("kaua@gmail.com", "32451825Kaua.", "1234.");
        cy.get('[name="name"]')
        .clear()
        .type("12345678");
        cy.contains(' Salvar').click();
        cy.contains('Dados da loja atualizado com sucesso!').should('exist');
    });

    it('edição do cep da loja', () => {
        edicaoDeLoja("kaua@gmail.com", "32451825Kaua.", "1234.");
        cy.get('[name="address.cep"]')
        .clear()
        .type("12345678");
        cy.contains(' Salvar').click();
        cy.contains('Dados da loja atualizado com sucesso!').should('exist');
    });

    it('edição do endereço da loja', () => {
        edicaoDeLoja("kaua@gmail.com", "32451825Kaua.", "1234.");
        cy.get('[name="address.street"]')
        .clear()
        .type("12345678");
        cy.contains(' Salvar').click();
        cy.contains('Dados da loja atualizado com sucesso!').should('exist');
    });

    it('edição do cnpjo da loja', () => {
        edicaoDeLoja("kaua@gmail.com", "32451825Kaua.", "1234.");
        cy.get('[name="cnpj"]')
        .clear()
        .type("00000000000000");
        cy.contains(' Salvar').click();
        cy.contains('Dados da loja atualizado com sucesso!').should('exist');
    });

    it('edição do telefone da loja', () => {
        edicaoDeLoja("kaua@gmail.com", "32451825Kaua.", "1234.");
        cy.get('[name="phone"]')
        .clear()
        .type("00000000000");
        cy.contains(' Salvar').click();
        cy.contains('Dados da loja atualizado com sucesso!').should('exist');
    });

    it('edição de endereço', () => {
        edicaoDeLoja("kaua@gmail.com", "32451825Kaua.", "1234.");
        cy.get('[name="address.cep"]')
        .clear()
        .type("00000000000")
        .wait(1000);
        cy.get('[name="address.street"]')
        .clear()
        .type("rua do teste")
        .wait(1000);
        cy.get('[name="address.number"]')
        .clear()
        .type("123")
        .wait(1000);
        cy.get('[name="address.neighborhood"]')
        .clear()
        .type('bairro')
        .wait(1000);
        cy.get('[name="address.city"]')
        .clear()
        .type("cidade")
        .wait(1000);
        cy.get('[name="address.state"]')
        .clear()
        .type("estado")
        .wait(1000);
        cy.contains(' Salvar').click();
        cy.contains('Dados da loja atualizado com sucesso!').should('exist');
    });

});
    function edicaoDeLoja(email, senha, codigo){
        cy.get('[name="user"]').type(email)
        cy.get('[name="password"]').type(senha)
        cy.get('[name="code"]').type(codigo)
        cy.get('.sc-guDMob').click()
        .wait(2000)
        cy.get(':nth-child(5) > .sc-a2e7afce-0 > .aresui-link').click();
        cy.get(':nth-child(1) > .aresui-link > .service').click();
    }