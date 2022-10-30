class TestDealEntryPage{

    clickNewDealButton(){
        cy.get('.btn.btn-default.btn').click();
    }

    enterNewdealName(dealName){
        cy.get('#WholeSaleDealName').clear().type(dealName);
    }

    selectCountryParty(counrtyparty){
        cy.get('select[id="selWholeSaleCounterParty"]').select(counrtyparty);
    }

    selectSecondaryCountryParty(secondaryCountryparty){
        cy.get('select[id="selWholeSaleSecondCounterParty"]').select(secondaryCountryparty);
    }

    selectWholesaleBlock(wholesaleBlock){
        cy.get('select[id="selWholesaleBlock"]').select(wholesaleBlock);
    }

    selectSettlementPoint(settlementPoint){
        cy.get('select[id="selSettlementPoint"]').select(settlementPoint);
    }

    selectSettlementLocation(settlementLocation){
        cy.get('select[id="selSettlementLocation"]').select(settlementLocation);
    }

    clickPhysicalValueRadiobutton(){
        cy.get('input[value="PhysicalValue"]').check();
    }

    clickFinanicalValueRadiobutton(){
        cy.get('input[value="FinanicalValue"]').check();
    }

    clickBuyValueRadiobutton(){
        cy.get('input[value="BuyValue"]').check();
    }

    clickSellValueRadiobutton(){
        cy.get('input[value="SellValue"]').check();
    }

    enterStartAndEndDate(startDate, endDate){
        cy.get('#startdate').clear().type(startDate);
        cy.get('#enddate').clear().type(endDate);
    }

    enterWholesaleDealVolume(volume){
        cy.get('#WholeSaleDealVolume').clear().type(volume);
    }

    enterWholesaleDealPrice(price){
        cy.get('#WholeSaleDealPrice').clear().type(price);
    }

    enterWholesaleDealFee(fee){
        cy.get('#WholeSaleDealFee').clear().type(fee);
    }

    clickSavedealButton(){
        cy.get('.btn.btn-info').click();
    }

    clickOkButton(){
        cy.get('.ajs-button.btn.btn-primary').click();
    }

    selectSavedDeal(savedDeal){
        cy.get('select[id="selWholeSaleDeal"]').select(savedDeal);
    }

}

export default TestDealEntryPage