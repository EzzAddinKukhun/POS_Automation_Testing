import { login } from "../../pages/Login"

Cypress.session.clearAllSavedSessions()

describe ('cashier', () => {
    beforeEach('visit cashier page', () => {
        cy.session('login', () => {
            cy.visit('http://localhost:3000/')
            login.submitLogin('ezz', '1234')
            cy.wait(2000)
            cy.url().then(($url) => {
                expect($url).to.be.equal('http://localhost:3000/cashier')
            })
        })    
    })

    it ('First Login Trial', () => {
        cy.visit('http://localhost:3000/cashier')
    })
    it ('Checking that username is displayed correctly', () => {
        cy.visit('http://localhost:3000/cashier')
        cy.get(`div[class='pos_userNameWelcome__5ZCu+']`).should('contain', 'Welcome, Ezz Addin')
    })
    

})