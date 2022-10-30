import LoginPage from "../../support/pages/LoginPage"
import SelectClientPage from "../../support/pages/SelectClientPage";
import DashboardPage from "../../support/pages/DashboardPage";

const loginPage = new LoginPage();
const selectClientPage = new SelectClientPage();
const dashboardPage = new DashboardPage();

describe('Cypress POC', function()
{
    
    before(function(){
        cy.fixture('example').then(function(data) 
        {
            this.data = data;
            loginPage.navigate(Cypress.env('qaurl'));
            loginPage.login(this.data.username, this.data.password);
            loginPage.validationText(" ACA ComplianceAlpha® ");
            
            
        })
    })
    
    it('verify tenant group dashboard', function(){
        selectClientPage.clickOnTenantName('010ct');
        dashboardPage.verifyPageHeader();
        dashboardPage.clickonSideNavMenuItem('EMPLOYEE COMPLIANCE');
       
    })

    it('verify summary view card count', function(){
        selectClientPage.clickOnTenantName('010ct');
        dashboardPage.verifyPageHeader();
        dashboardPage.verifySummaryCardCount(2);
       
    })

  

})