describe('Teste de Login', () => {
  it('Deve visitar a página de login, preencher dados, clicar no botão e validar mensagem', () => {
    // 1. Visite a página de login
    cy.visit('http://127.0.0.1:5500/app/login.html'); // Substitua pela URL da sua página

    // 2. Preencha os campos de entrada
    cy.get('input[name="username"]').type('admin'); // Seleciona o campo de e-mail e digita
    cy.get('input[name="password"]').type('admin');       // Seleciona o campo de senha e digita

    // 3. Clique no botão de login
    cy.get('input[type="submit"]').click();

    // 4. Verifique a mensagem de sucesso
    cy.contains('Login realizado com sucesso! Bem-vindo');
  });
});
