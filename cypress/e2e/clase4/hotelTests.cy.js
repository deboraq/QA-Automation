describe('Pruebas en Automation in Testing', { testIsolation: false }, () => {

    beforeEach(() => {
        // Visitar la página antes de cada prueba
        cy.visit('https://automationintesting.online/');
    });

    it('Verificar que la información del hotel esté presente', () => {

        // Verificar que el nombre del hotel esté presente
        cy.get('.col-sm-5 > p:nth-child(1)').contains('Shady Meadows B&B').should('be.visible');

        // Verificar la dirección del hotel
        cy.get('.col-sm-5 > p:nth-child(2)').contains('The Old Farmhouse, Shady Street, Newfordburyshire, NE1 410S').should('be.visible');

        // Verificar el número de teléfono
        cy.get('.col-sm-5 > p:nth-child(3)').contains('012345678901').should('be.visible');

        // Verificar el correo electrónico
        cy.get('.col-sm-5 > p:nth-child(4)').contains('fake@fakeemail.com').should('be.visible');
    });

    it('Verificar que al menos una de las dos imágenes esté visible', () => {
        cy.get('img[src="/images/rbp-logo.jpg"], img[src="/images/room2.jpg"]')
        .should('have.length.greaterThan', 0) // Al menos una imagen debe existir
        .and('be.visible'); // Y debe ser visible
    });

    it('Confirmar que el texto de la descripción del hotel sea el esperado', () => {
        // Verificar el texto de la descripción del hotel
        cy.get('.col-sm-10 > p').contains('Welcome to Shady Meadows, a delightful Bed & Breakfast nestled in the hills on Newingtonfordburyshire. A place so beautiful you will never want to leave. All our rooms have comfortable beds and we provide breakfast from the locally sourced supermarket. It is a delightful place.')
        .should('be.visible');
    });

});