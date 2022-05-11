export class PaymentDetails {

    VarifyPayment_page(){
        return cy.url().should('include', 'passenger')
                 .get('h2').should('contain','Pay by Credit Card')
    }
    
    SelectVisa_card(){
        return  cy.get('[value="visa"]')
        .should('not.be.checked')
        .and('be.enabled')
        .click()
        .and('be.checked')

    }

    VarifyMaster_card(){
        return cy.get('[value="master"]')
        .should('not.be.checked')
        .and('be.enabled')
     }

    VarifyCardHolder_Name(){
       return cy.get('[name="holder_name"]').should('have.value', 'Silk San')
    }

    EnterCard_number(){
        return cy.get('[name="card_number"]').type('123457890')
    }

    SelectExpiry_month(){
        return cy.get('[name="expiry_month"]').select('09').should('contain','09')
    }

    SelectExpiry_year(){
        return cy.get('[name="expiry_year"]').select('2025').should('contain','2025')
    }

    ClickPay_now(){
        return cy.get('[type="submit"]').click()
    }

    TicketConfirmation(){
        return cy.contains('Confirmation').should('contain', 'Confirmation')
                 .log('Booking number: 3676')
    }

    Sign_off(){
        return cy.get('#user_nav > a').click()
        
    }

    ValifySign_offMessage(){
        return cy.get('#flash_notice').should('have.text', 'Signed out!')
                .url().should('include', 'login')
    }








}