/// <reference types="cypress" />

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('produtos')
    });


    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]').first().click()
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        cy.get('[class="product-block grid"]').first().click()
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.input-text').clear().type('4')
        cy.get('.single_add_to_cart_button').click()

        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()
        cy.get('.showlogin').click()
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-button').click()
        cy.get('#terms').click()
        cy.get('#place_order').click()

        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
    });



})