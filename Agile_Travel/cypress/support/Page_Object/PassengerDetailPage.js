export class PassengerDetails{

    Validation_header(){
  
    return cy.get('h2').should('contain.text', 'Passenger Details')
    
    }

    Validation_URL(){
        return cy.url().should('contain', 'returnMonth')
    }

    EnterFirstName(){
        return cy.get('[name="passengerFirstName"]')
                 .should('be.enabled').and('be.visible')
                 .type('Silk') 
    }

    EnterLastName(){
        return   cy.get('[name="passengerLastName"]')
                    .should('be.enabled').and('be.visible')
                    .type('San')
    }

    ClickNext(){

        return cy.get('[type="submit"]')
        .should('be.enabled')
        .click()

    }


}