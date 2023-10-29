/// <reference types="cypress" />
let bannerCounter = 0;

beforeEach(() => {
    
    cy.visit("https://mesax-dev.vercel.app/login")
    
    })

describe('login', () => {
    it('Adicionar Novo Banner de Anunciante', () => {
        login("kaua@gmail.com", "32451825Kaua.", "1234.");
        criarBanner("banner", "https://www.google.com");
        cy.contains('Banner criado com sucesso!').should('exist');
    })

    
    it('Editar Banner de Anunciante Existente', () => {
            login("kaua@gmail.com", "32451825Kaua.", "1234.");
            criarBanner("banner", "https://www.google.com");
            cy.get('.swiper-slide-active > .sc-8c969e5a-0 > .sc-88839af2-0')
            .parents('.swiper-slide-active')
            .find('[aria-label="Editar"]')
            .click()
            cy.get('[name="name"]')
            .clear()
            .type(`banner alterado`);
            cy.get(':nth-child(2) > .sc-guDMob').click();
            cy.contains('Banner editado com sucesso!').should('exist');
        })
        
        it('Excluir Banner de Anunciante', () => {
            login("kaua@gmail.com", "32451825Kaua.", "1234.");
            criarBanner("banner", "https://www.google.com");
            cy.get('.swiper-slide-active > .sc-8c969e5a-0 > .sc-88839af2-0')
            .parents('.swiper-slide-active')
            .find('[aria-label="Apagar"]')
            .click()
            cy.get('.swiper-slide-active')
            .should('not.contain', 'banner');
            });
        
        // it('Copiar Link do Banner de Anunciante', () => {
            //   login("kaua@gmail.com", "32451825Kaua.", "1234.");
            //   criarBanner("banner", "https://www.google.com");
            //   cy.get('.swiper-slide-active > .sc-8c969e5a-0 > .sc-88839af2-0')
            //   .parents('.swiper-slide-active')
            //   .find('[aria-label="Copiar link do banner"]')
            //   .click()
            // });

        // it('Visualização de Banner de Anunciante:', () => {
        //     login("kaua@gmail.com", "32451825Kaua.", "1234.");
        //     
        //     });
        // it('Redirecionamento Correto ao Clicar no Banner:', () => {
        //     login("kaua@gmail.com", "32451825Kaua.", "1234.");
        //     criarBanner("banner", "https://www.google.com");
        // });
    });
        
        function login(email, senha, codigo){
    cy.get('[name="user"]').type(email)
    cy.get('[name="password"]').type(senha)
    cy.get('[name="code"]').type(codigo)
    cy.get('.sc-guDMob').click()
}

function criarBanner(nome, url){
    cy.get(':nth-child(4) > .sc-a2e7afce-0 > .aresui-link').click();
        cy.contains(' Adicionar novo').click();
        cy.get("#banner > div.sc-jTQDJr.jMPwki.aresui-uploadarea > div").click();
        cy.get('input[type=file]').selectFile('cypress/fixtures/teste.png', { force: true });
        cy.get('.buttons > :nth-child(2) > .sc-guDMob').click();
        cy.get('[name="name"]').type(`${nome} ${bannerCounter}`);
        bannerCounter++;
        cy.get('[name="url"]').type(url);
        cy.get(':nth-child(2) > .sc-guDMob').click();
}