/// <reference types="cypress" />

import {LoginPage} from '../../support/Page_Object/LoginPage'
import {SelectFlight} from '../../support/Page_Object/SelectFlight'
import {PassengerDetails} from '../../support/Page_Object/PassengerDetailPage'
import {PaymentDetails} from '../../support/Page_Object/Payment_SignoutPage'


describe('Login Test', () => { 

    beforeEach(function(){
        //add global variable
        cy.visit(Cypress.env("url"))
        // use fixture to drive login data
        cy.fixture('example').then(function(data) {
          this.data = data
        })
    }); 
    
    const login = new LoginPage;
    const selectFlight = new SelectFlight;
    const passengerDetail = new PassengerDetails;
    const paymentDetails = new PaymentDetails;

    it('Login Test with valid credentials', function(){

        cy.log('Login Test with valid credencials')
        login.VarifyTitle()
        login.EnterUserName().type(this.data.systemUserName) 
        login.EnterPassword().type(this.data.systemPassword) 
        login.ClickRememberMe()
        login.ClickSignIn() 
             

        // Test welcome page
        
        selectFlight.VarifySelectFlight_page()
        selectFlight.VarifyHeader_text()
        
        selectFlight.SelectOneWayTrip()
        selectFlight.VarifyReturn_trip()

        selectFlight.SelectOrigin_Sydney()
        selectFlight.SelectDestination_NewYork()
         
        selectFlight.SelectDeparting_Day()
        selectFlight.SelectDeparting_Month()

        selectFlight.SelectTime_8_30()
        selectFlight.VarifyTime_8_00()
        selectFlight.VarifyTime_9_00()
        selectFlight.Click_Continue()
              
    // Passenger Details

        passengerDetail.Validation_URL()
        passengerDetail.Validation_header()
        passengerDetail.EnterFirstName()
        passengerDetail.EnterLastName()
        passengerDetail.ClickNext()
    
    // Payment details
   
         paymentDetails.VarifyPayment_page()
         paymentDetails.SelectVisa_card()
         paymentDetails.VarifyMaster_card()
         paymentDetails.VarifyCardHolder_Name()
         paymentDetails.EnterCard_number()
         paymentDetails.SelectExpiry_month()
         paymentDetails.SelectExpiry_year()
         paymentDetails.ClickPay_now()
         paymentDetails.TicketConfirmation()
         paymentDetails.Sign_off()
         paymentDetails.ValifySign_offMessage()

    // configure time to 8 sec
    //Cypress.config('defaultCommandTimeout', 8000)
    
    });  


    it('Login test with invalid username and valid password', function(){
            login.EnterUserName().type(this.data.invalidUsername) 
            login.EnterPassword().type(this.data.systemPassword) 
            login.ClickRememberMe()
            login.ClickSignIn()
            login.VarifyError()
    });

    it('Login test with invalid username and invalid password', function(){
        login.EnterUserName().type(this.data.invalidUsername) 
        login.EnterPassword().type(this.data.invalidPassword) 
        login.ClickRememberMe()
        login.ClickSignIn()
        login.ShowingError()
});
    
});



