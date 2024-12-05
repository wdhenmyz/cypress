describe('Teste de redirecionamento do botão', () => {
    it('Deve redirecionar para a página correta', () => {
        cy.visit('http://127.0.0.1:5500/app/login.html'); // Acesse a página

        cy.get('input[name="username"]').type('admin'); // Seleciona o campo de e-mail e digita
        cy.get('input[name="password"]').type('admin');       // Seleciona o campo de senha e digita

        cy.get('input[type="submit"]').click(); // Clique no botão
        cy.url().should('eq', 'http://127.0.0.1:5500/app/index.html'); // Verifique a URL
    });
});
