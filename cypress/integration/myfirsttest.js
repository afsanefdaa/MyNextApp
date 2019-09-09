describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('localhost:3000/test/cypress');
    cy.get('input')
      .type('Hello, World')
      .invoke('val')
      .then((text) => {
        const someText = text;
        cy.get('button').click();
        cy.get('span').contains(someText);
      });
  });
});
