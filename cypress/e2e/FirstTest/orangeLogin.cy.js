describe('First Test', {testIsolation:false}, () => {

    it('test login', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('.oxd-text--h5').contains('Login');
        cy.get('oxd-sheet > :nth-child(2)').contains('Password : admin123');
        cy.get('input[name="username"]').type('Admin');
        cy.get('input[name="password"]').type('admin123');
        cy.get('.oxd-button').click();
        cy.wait(2000)
    });

    it('test login with wron password', () => {
        cy.get('h6').contains('Dashboard')});
});