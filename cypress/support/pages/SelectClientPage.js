class SelectClientPage{

    clickOnTenantName(tenantName){
        cy.get('div.description').each(($el, index, $list) =>{
            if($el.text().includes(tenantName)){
                cy.get('div.description').eq(index).click();
       
            }
            
        })

        return this
    }

    searchTenantInput(tenantName){
        cy.get('input[placeholder="search tenants"]').type(tenantName);
        return this;
    }


}

export default SelectClientPage;