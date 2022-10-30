import DataEntryNavigation from "../PageObject/DataEntryNavigation.js";
import LoginPage from "../PageObject/LoginPage.js";
import TestDealEntryPage from "../PageObject/TestDealEntryPage.js";



describe('Test Deal Entry Test Suite', function(){

    var num = Math.random() * 100;
    var newTestDealName = "Deal_" + Math.floor(num);
    var counrtyparty = "CounterParty 1";
    var secondaryCountryparty = "Counterparty 2";
    var wholesaleBlock = "2x16";
    var settlementPoint = "LZ";
    var settlementLocation = "North";
    var volume = Math.floor(num) + 10;
    var price = Math.floor(num) + 2;
    var fee = Math.floor(num) / 10;

    const login = new LoginPage();
    const testDealEntryPage = new TestDealEntryPage();
    const dataEntryNavigation = new DataEntryNavigation();

    beforeEach(() => {
       //navigate to login page
       login.navigate();

       //validate url
       cy.url().should('contain', 'login');

       //Login to application
       login.enterEmailAddress('combocurve_user@combocurve.com');
       login.enterPassword('combocurve_12');
       login.clickLogin();

        //Navigate to Test Deal Entry Form
        dataEntryNavigation.clickonPageNavigation('Test Deal Entry');
        cy.url().should('contain', 'wholesaledealpage');

      })

    it('Create test deal entry', function(){

        //Click on new deal button
        testDealEntryPage.clickNewDealButton();

        //Enter new deal name
        testDealEntryPage.enterNewdealName(newTestDealName);

        //select Countryparty, Secondary Countryparty, and Wholesae Block
        testDealEntryPage.selectCountryParty(counrtyparty);
        testDealEntryPage.selectSecondaryCountryParty(secondaryCountryparty);
        testDealEntryPage.selectWholesaleBlock(wholesaleBlock);

        //select settlement point and settlement zone
        testDealEntryPage.selectSettlementPoint(settlementPoint);
        testDealEntryPage.selectSettlementLocation(settlementLocation);

        //Select Physical/Financial radio button
        cy.get('input[value="PhysicalValue"]').should('be.checked');
        testDealEntryPage.clickFinanicalValueRadiobutton();
        
        //Select Type of deal radio button
        cy.get('input[value="BuyValue"]').should('be.checked');
        testDealEntryPage.clickSellValueRadiobutton();
        

        //Enter start and end data
        testDealEntryPage.enterStartAndEndDate('2022-07-01', '2022-12-31');

        //Enter Volume, price, and fee
        testDealEntryPage.enterWholesaleDealVolume(volume);
        testDealEntryPage.enterWholesaleDealPrice(price);
        testDealEntryPage.enterWholesaleDealFee(fee);

        //Save deal
        testDealEntryPage.clickSavedealButton();

        //click ok button
        testDealEntryPage.clickOkButton();

        //Validate deal saved
        cy.get('.ajs-message.ajs-success.ajs-visible').should("have.text", 'The record was saved');

    })

    it('Edit test deal entry', function(){
        var testDealName = newTestDealName
        var counrtyparty = "Counterparty 2";
        var wholesalesBlock = "5x16";
        var settlementPoint = "HB";
        var settlementLocation = "West";
        var price = "15";
        var fee = "8";

        //Select saved deal
        testDealEntryPage.selectSavedDeal(testDealName);

        //Update Counterparty and Wholesale block
        testDealEntryPage.selectCountryParty(counrtyparty);
        testDealEntryPage.selectWholesaleBlock(wholesalesBlock);

        //Update settlement point and settlement zone
        testDealEntryPage.selectSettlementPoint(settlementPoint);
        testDealEntryPage.selectSettlementLocation(settlementLocation);

        //Update type of deal
        testDealEntryPage.clickBuyValueRadiobutton();
        cy.get('input[value="BuyValue"]').should('be.checked');

        //Update price and fee
        testDealEntryPage.enterWholesaleDealPrice(price);
        testDealEntryPage.enterWholesaleDealFee(fee);

        //Save deal
        testDealEntryPage.clickSavedealButton();

        //click ok button
        testDealEntryPage.clickOkButton();

        //Validate deal saved
        cy.get('.ajs-message.ajs-success.ajs-visible').should("have.text", 'The record was saved');

    });

    afterEach(() => {

        //Logout from application
        dataEntryNavigation.clickonPageNavigation('Logout');
        cy.url().should('contain', 'login');

      })

})