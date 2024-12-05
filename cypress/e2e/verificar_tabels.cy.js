describe('Teste da tabela de estacionamento', () => {
    beforeEach(() => {
        // Acesse a página com a tabela
        cy.visit('http://127.0.0.1:5500/app/index.html'); // Substitua pela URL da página
    });

    it('Deve verificar os cabeçalhos da tabela de estacionamento', () => {
        // Verifica se os cabeçalhos da tabela são exibidos corretamente
        cy.get('#parkingTableHead tr th').then((headers) => {
            const headerTexts = [
                'Placa',
                'tipo',
                'Proprietário',
                'Hora de Entrada',
                'Hora de Saída',
                'Valor (R$)',
                'Ações',
            ];

            headers.each((index, header) => {
                cy.wrap(header).should('have.text', headerTexts[index]);
            });
        });
    });

    it('Deve verificar se os dados da tabela estão corretos', () => {
        // Simulação: Verifica se a tabela contém ao menos uma linha com dados
        cy.get('#parkingTableBody tr').should('exist'); // Verifica se há linhas

        // Valida os dados de uma linha específica (Exemplo: a primeira linha)
        cy.get('#parkingTableBody tr').first().within(() => {
            cy.get('td').eq(0).should('not.be.empty'); // Placa
            cy.get('td').eq(1).should('not.be.empty'); // tipo
            cy.get('td').eq(2).should('not.be.empty'); // Proprietário
            cy.get('td').eq(3).should('not.be.empty'); // Hora de Entrada
            cy.get('td').eq(4).should('not.be.empty'); // Hora de Saída
            cy.get('td').eq(5).should('not.be.empty'); // Valor
        });
    });

    it('Deve verificar uma linha específica da tabela', () => {
        // Exemplo: Validar uma linha com valores conhecidos (se aplicável)
        cy.get('#parkingTableBody tr').contains('asd').parent().within(() => {
            cy.get('td').eq(0).should('have.text', 'AAA-1234'); // Placa
            cy.get('td').eq(1).should('have.text', 'Carro'); // tipo
            cy.get('td').eq(2).should('have.text', 'João Silva'); // Proprietário
            cy.get('td').eq(3).should('have.text', '08:00'); // Hora de Entrada
            cy.get('td').eq(4).should('have.text', '10:00'); // Hora de Saída
            cy.get('td').eq(5).should('have.text', '4.00'); // Valor
        });
    });
});