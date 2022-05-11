export class SelectFlight {

    VarifySelectFlight_page(){
        return cy.get('#flash_notice').should('have.text','Signed in!')
                .url().should('include', 'start')
    } 
    
    VarifyHeader_text(){
        return  cy.get('h2').should('contain.text', 'Select Flight') // text validation
    }

    SelectOneWayTrip(){
        return cy.get('[value="oneway"]').check()
        .should('be.checked')
                    .and('be.visible')
                    .and('be.enabled')
    }

    VarifyReturn_trip(){
        return cy.contains('Return').should('not.be.checked')
    }

    SelectOrigin_Sydney(){
        return cy.get('[name="fromPort"]').select('Sydney').should('be.visible')
    }

    SelectDestination_NewYork(){
        return cy.get('[name="toPort"]').select('New York').should('be.visible')
    }

    SelectDeparting_Day(){
        return cy.get('#departDay').select('09')
                 .should('be.enabled')
                 .and('be.visible') 
    }

    SelectDeparting_Month(){
        return cy.get('#departMonth').select('December 2021')
                .should('be.enabled')  
                .and('be.visible')
    }

    SelectTime_8_30(){
        return cy.get(':nth-child(2) > th > input').check().should('be.checked')
    }

    VarifyTime_8_00(){
        return cy.get(':nth-child(1) > th > input').should('not.be.checked')
    }

    VarifyTime_9_00(){
        return cy.get(':nth-child(3) > th > input').should('not.be.checked')
    }

    Click_Continue(){
        return  cy.get('[type="submit"]').should('be.enabled').click()
    }







}