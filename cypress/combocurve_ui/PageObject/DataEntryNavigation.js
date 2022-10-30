class DataEntryNavigation{

    clickonPageNavigation(navigationPageName){
        cy.get('.active.has-sub').trigger('mouseover');
        cy.get('.navbar-item').contains(navigationPageName, {matchCase: false}).first().click({ force: true });
    }
}

export default DataEntryNavigation