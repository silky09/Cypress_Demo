/// <reference types="cypress" />
describe('Login Test', () => { 

    beforeEach(() => {
        cy.visit('https://travel.agileway.net/login')
    });    

    it('Login Test with valid credencials', () => {

        cy.title().should('eq','Agile Travel')
        cy.get('#username').type('agileway') // input field
        cy.get('#password').type('testwise') // input field
        cy.get('#remember_me') // checkbox
          .check()
          .should('be.checked') 
        cy.get(':nth-child(4) > input') // signin button
        
        //validation
          .should('be.enabled')
          .and('be.visible')
          .click()

        // Test welcome page
        cy.get('#flash_notice').should('have.text','Signed in!')
        cy.url().should('include', 'start') // URL validation
        cy.get('h2').should('contain.text', 'Select Flight') // text validation
        
        //cy.pause()
        // select Trip type: One way (radio button)
        cy.get('[value="oneway"]')
          .check()
          .should('be.checked')
          .and('be.visible')
          .and('be.enabled')
        cy.contains('Return')
           .should('not.be.checked')
        // From Sydney to New York : Static dropdown
        cy.get('[name="fromPort"]').select('Sydney').should('be.visible')
        cy.get('[name="toPort"]').select('New York').should('be.visible') 

        // Departing Date and Month: Static dropdown

        cy.get('#departDay')
          .should('be.enabled')  
          .select('09')
          .and('be.visible')    
          
        cy.get('#departMonth')
          .should('be.enabled')  
          .select('December 2021')
          .and('be.visible') 

    // Time and Airline detail: multi Checkboxes 

    cy.get(':nth-child(2) > th > input').check()
    cy.get(':nth-child(1) > th > input')
      .should('not.be.checked')
    cy.get(':nth-child(3) > th > input')
      .should('not.be.checked')

    // click continue button
    
    cy.get('[type="submit"]')
      .should('be.enabled')
      .click()

    // Passenger Details

    cy.get('h2').should('contain.text', 'Passenger Details')
    cy.url().should('contain', 'returnMonth')
    
    // fName anf lName
    cy.get('[name="passengerFirstName"]').should('be.enabled')
       .type('Silk') 
    cy.get('[name="passengerLastName"]').should('be.enabled').and('be.visible')
       .type('San')

    // click next buton

    cy.get('[type="submit"]')
      .should('be.enabled')
      .click()
    
    // Payment details
    cy.url().should('include', 'passenger')
    cy.get('h2').should('contain','Pay by Credit Card')

    
        // card type: visa (radio button)
    cy.get('[value="visa"]')
      .should('not.be.checked')
      .and('be.enabled')
      .click()
      .and('be.checked')
    
      cy.get('[value="master"]')
      .should('not.be.checked')
      .and('be.enabled')

    // validation

    cy.get('[name="holder_name"]').should('have.value', 'Silk San')

    cy.get('[name="card_number"]').type('123457890')

    cy.get('[name="expiry_month"]').select('09').should('contain','09')
    cy.get('[name="expiry_year"]').select('2025').should('contain','2025')

    cy.get('[type="submit"]').click()
    // configure time to 8 sec
    Cypress.config('defaultCommandTimeout', 8000)

    // Validate confirmation message

    cy.contains('Confirmation').should('contain', 'Confirmation')
    cy.log('Booking number: 3676')

    // sign off
    cy.get('#user_nav > a').click()

    // validation signoff message

    cy.get('#flash_notice').should('have.text', 'Signed out!')
    cy.url().should('include', 'login')
    });  
});



