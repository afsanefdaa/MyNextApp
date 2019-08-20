describe('My First Test', function() {
    it('Visits the Kitchen Sink', function() {
        cy.visit('localhost:3000/cypress');
        cy.get('input')
            .type('Hello, World')
            .invoke('val')
            .then(text => {
                const someText = text;
                cy.get('button').click();
                cy.get('span').contains(someText);
            });
    })
})