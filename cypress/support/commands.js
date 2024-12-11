// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
//
// Comando para hacer login
Cypress.Commands.add('login', (username, password) => {
    cy.get('#user-name').type(username); // Escribe el nombre de usuario
    cy.get('#password').type(password); // Escribe la contraseña
    cy.get('#login-button').click(); // Hace clic en el botón de login
});

// Comando para agregar productos al carrito
Cypress.Commands.add('addProductsToCart', (products) => {
    products.forEach(product => {
        if (product === 'Sauce Labs Backpack') {
            cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('be.visible').click();
        } else if (product === 'Sauce Labs Bike Light') {
            cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').should('be.visible').click();
        }
    });
});

// Comando para proceder al checkout
Cypress.Commands.add('checkout', (userData) => {
    // Hace clic en el carrito de compras
    cy.get('#shopping_cart_container').click();  // Ir al carrito
    
    // Hace clic en el botón de checkout
    cy.get('#checkout').click();  // Ir al checkout
    
    // Completa los campos del formulario de checkout
    cy.get('#first-name').type(userData.firstName);  // Escribe el primer nombre
    cy.get('#last-name').type(userData.lastName);    // Escribe el apellido
    cy.get('#postal-code').type(userData.postalCode);  // Escribe el código postal
    
    // Hace clic en "Continue"
    cy.get('#continue').click();  // Continuar con el checkout
    
    // Hace clic en "Finish" para finalizar la compra
    cy.get('#finish').click();    // Finaliza la compra
});

// Comando para hacer logout
Cypress.Commands.add('logout', () => {
    // Hace clic en el botón de menú hamburguesa
    cy.get('#react-burger-menu-btn').click();  // Abre el menú de usuario
    
    // Hace clic en el enlace de logout para cerrar sesión
    cy.get('#logout_sidebar_link').click();    // Hace clic en el enlace de logout
});