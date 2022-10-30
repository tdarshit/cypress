import DataEntryNavigation from "../PageObject/DataEntryNavigation.js";
import LoginPage from "../PageObject/LoginPage.js";
import TestGraphingModelPage from "../PageObject/TestGraphingModelPage.js";

describe('Test Graphing Model Test Suite', function(){

    var num = Math.random() * 100;
    var newDealName = "Auto_" + Math.floor(num);
    var settlementPoint = "LZ";
    var settlementZone = "Houston";
    var capacityFactor = Math.floor(num) + 10;
    var discountFactor = Math.floor(num) + 5;
    var capacity = Math.floor(num) + 20;

    const login = new LoginPage();
    const testGraphingModelPage = new TestGraphingModelPage();
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

        //Navigate to Test Graphing Model
        dataEntryNavigation.clickonPageNavigation('Test Graphing Model');
        cy.url().should('contain', 'testing_stuff');

      })

    it('create new deal', function(){        

        //Click on new deal button
        testGraphingModelPage.clickNewdealButton();

        //Enter new deal name
        testGraphingModelPage.enterNewdealName(newDealName);

        //select settlement point and settlement zone
        testGraphingModelPage.enterSettlementPoint(settlementPoint);
        testGraphingModelPage.enterSettlementZone(settlementZone);

        //Enter start and end data
        testGraphingModelPage.enterStartAndEndDate('2022-10-01', '2022-12-31');

        //Enter Capacity factor, discount factor, and Capacity
        testGraphingModelPage.enterCapacityFactor(capacityFactor);
        testGraphingModelPage.enterDiscountFactor(discountFactor);
        testGraphingModelPage.enterCapacity(capacity);

        //Save deal
        testGraphingModelPage.clickSavedeal();

        //validate graph data displayed
        cy.get('text[text-anchor="middle"]').should('have.length', 4);

    });

    it('Edit saved deal', function(){
        var selectDeal = newDealName;
        var updateSettlementPoint = "HB";
        var updateSettlementZone = "North"
        var capacityFactor = "40";
        var discountFactor = "30";
      
        //Select saved deal
        testGraphingModelPage.selectDealName(selectDeal);

        //Update settlement point and settlement zone
        testGraphingModelPage.enterSettlementPoint(updateSettlementPoint);
        testGraphingModelPage.enterSettlementZone(updateSettlementZone);

        //Update start date
        cy.get('#startdate').clear().type('2022-09-01');

        //Update Capacity factor and discount factor
        testGraphingModelPage.enterCapacityFactor(capacityFactor);
        testGraphingModelPage.enterDiscountFactor(discountFactor);

        //Save deal
        testGraphingModelPage.clickSavedeal();

        //validate graph data displayed
        cy.get('text[text-anchor="middle"]').should('have.length', 5);

    })

    afterEach(() => {

        //Logout from application
        dataEntryNavigation.clickonPageNavigation('Logout');
        cy.url().should('contain', 'login');

      })
})