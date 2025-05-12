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

    it ('Checking that username is displayed', () => {
        cy.visit('http://localhost:3000/cashier')
        cy.get(`div[class='pos_userNameWelcome__5ZCu+']`).should('contain', 'Welcome, Ezz Addin')
    })

    it ('Checking that categories imgs are displayed', () => {
        cy.visit('http://localhost:3000/cashier')
        cy.get(`img[class='pos_categoryThumbnial__LGzs4']`).each(($img, index) => {
            cy.wrap($img).should('be.visible').and(($image)=>{
                const image = $image[0] as HTMLImageElement;
              expect(image.naturalWidth).to.be.greaterThan(0, `Image at index ${index} is loaded`);
            });
        });
    })

    it.only ('Checking that displayed products are matched with the category selected', () => {
        cy.visit('http://localhost:3000/cashier')
        cy.get(`div[class='slick-slide slick-active']`).should('have.length', 5)

    })
    
})