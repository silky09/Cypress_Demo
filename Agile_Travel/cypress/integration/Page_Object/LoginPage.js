export class LoginPage {

    VarifyTitle(){
      return cy.title().should('eq','Agile Travel')
    }

    EnterUserName(){
        return cy.get('#username')
    }

    EnterPassword(){
        return cy.get('#password')
    }

    ClickRememberMe(){
        return cy.get('#remember_me').check().should('be.checked') 
    }

    ClickSignIn(){
        return cy.get(':nth-child(4) > input').should('be.enabled')
        .and('be.visible')
        .click()
    }




}