import { login } from "../pages/Login";
describe('LogIn Test Suite', () => {
    beforeEach ('Visit LogIn Page', ()=>{
        cy.visit('http://localhost:3000/')
    })
    it('Try to log in with valid credentials', () => {
        login.submitLogin('ezz', '1234')
        cy.url().then(($url) => {
            expect($url).to.be.equal('http://localhost:3000/')
        })
    });
    it ('Try to login using invalid username', () => {
        login.submitLogin('ezzz', '1234')
        cy.get(`div[class='swal-overlay swal-overlay--show-modal']`).should('be.visible').
        and('contain', `This account is doesn't exist!, Try to sure of enetered username..`)
        cy.get(`button[class='swal-button swal-button--confirm']`).click()
    })
    it ('Try to login using invalid password', () => {
        login.submitLogin('ezz', '12345')
        cy.get(`div[class='swal-overlay swal-overlay--show-modal']`).should('be.visible').
        and('contain', `Password is Wrong!`)
        cy.get(`button[class='swal-button swal-button--confirm']`).click()
    })
    it.only ('Try to login using empty username', () => {
        login.submitLogin('', '123456789')
        cy.get(`.reg_errorMessageBox__G4I4q`)
        .eq(0).should('be.visible').and('contain',`Username is Required!`)
    })
    it ('Try to login using empty password', () => {
        login.submitLogin('ezz', '')
        cy.get(`.reg_errorMessageBox__G4I4q`)
        .eq(0).should('be.visible').and('contain',`Password is Required!`)
    })
    it ('Try to login using empty username and password', () => {
        login.submitLogin('', '')
        cy.get(`.reg_errorMessageBox__G4I4q`)
        .eq(0).should('be.visible').and('contain',`Username is Required!`)
        cy.get(`.reg_errorMessageBox__G4I4q`)
        .eq(1).should('be.visible').and('contain',`Password is Required!`)
    })
});