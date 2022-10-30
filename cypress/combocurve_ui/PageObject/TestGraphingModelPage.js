class TestGraphingModelPage{
    
    clickNewdealButton(){
        cy.get('.btn.btn-danger').click();
    }

    enterNewdealName(dealName){
        cy.get('#txtDealName').clear().type(dealName);
    }

    enterSettlementPoint(point){
        cy.get('select[id="selSettlementPoint"]').select(point);
    }

    enterSettlementZone(zone){
        cy.get('select[id="selSettlementZone"]').select(zone);
    }

    enterStartAndEndDate(startDate, endDate){
        cy.get('#startdate').clear().type(startDate);
        cy.get('#enddate').clear().type(endDate);
    }

    enterCapacityFactor(capacityFactor){
        cy.get('#txtCapacityFactor').clear().type(capacityFactor);
    }

    enterDiscountFactor(discountFactor){
        cy.get('#txtDiscountFactor').clear().type(discountFactor);
    }

    enterCapacity(capacity){
        cy.get('#txtCapacity').clear().type(capacity); 
    }

    clickSavedeal(){
        cy.get('.btn.btn-info').click();
    }

    selectDealName(dealName){
        cy.get('select[id="selDealName"]').select(dealName);
    }
}

export default TestGraphingModelPage