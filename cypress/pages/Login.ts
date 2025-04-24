class Login {
    private username: string= `input[name='username']`;
    private password: string= `input[name='password']`;
    private logInBtn: string= `button[name='logInBtn']`;
    
    submitLogin (username: string, password: string) {
        if (username === '' && password === ''){
            cy.get(this.username).clear()
            cy.get(this.password).clear()

        }
        else if (username === ''){
            cy.get(this.username).clear()
            cy.get(this.password).type(password)
        }
        else if (password === ''){
            cy.get(this.username).type(username)
            cy.get(this.password).clear()
        }
        else{
            cy.get(this.username).type(username)
            cy.get(this.password).type(password)
        }
        
         
        cy.get(this.logInBtn).click()
    }
}

export const login = new Login()