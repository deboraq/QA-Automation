describe('PruebaApi', ()=>{
    it('Crear usuario OK', ()=>{
        cy.intercept('POST','/api/users').as('userCreado')
        cy.visit('https://conduit.bondaracademy.com/')
        cy.contains(/sign up/i).click()
        cy.get('[Placeholder=Username]').type('2CheSapeTeQueria')
        cy.get('[Placeholder=Email]').type('Sape2@tequeria.com')
        cy.get('[Placeholder=Password]').type('TeQueria')
        cy.get('.btn').click()
        cy.wait('@userCreado').then((interception) => {
            expect(interception.response.statusCode).to.equal(201)
        })
        cy.log('Vamo Sape , te queremos?')
    })

    it('Ingreso usuario Error', ()=>{
        cy.intercept('POST','/api/users/login').as('userWrong')
        cy.visit('https://conduit.bondaracademy.com/login')
        cy.get('[Placeholder=Email]').type('Sinarroba')
        cy.get('[Placeholder=Password]').type('Brenda')
        cy.get('.btn').click()
        cy.wait('@userWrong').then((interception) => {
            expect(interception.response.statusCode).to.equal(403)
        })
        cy.log('Por ahi no es, campeon')
    })

})