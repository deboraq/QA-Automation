describe('Pruebas de Compra en SauceDemo', { testIsolation: false }, () => {

    // Datos del usuario
    const user = {
      username: 'standard_user',
      password: 'secret_sauce'
    };

    // Productos que vamos a agregar al carrito
    const productNames = ['Sauce Labs Backpack', 'Sauce Labs Bike Light']; 

    // Datos del formulario para el checkout
    const userData = {
      firstName: 'Juan',
      lastName: 'Perez',
      postalCode: '5000'
    };

    // Antes de cada prueba, visitar la página principal
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com');
    });

    it('Realizar una compra exitosa con standard_user', () => {
      // Paso 1: Iniciar sesión
      cy.login(user.username, user.password);

      // Paso 2: Agregar productos al carrito
      cy.addProductsToCart(productNames);

      // Paso 3: Proceder al checkout
      cy.checkout(userData);

      // Paso 4: Validar que la compra fue exitosa
      cy.contains('Thank you for your order!').should('be.visible');

      // Paso 5: Cerrar sesión
      cy.logout();
    });
});