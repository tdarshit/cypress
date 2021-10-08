class DashboardPage{


    verifyPageHeader(){
        cy.get('div.toolbar-center-container.ng-star-inserted').should('have.text', 'Dashboard');
    }

    clickonSideNavMenuItem(sideMenu){
        cy.get('button[aria-label="Toggle sidenav"]').click();
        cy.get('span.sidenav-menu-items.no-child-title').each(($el, index, $list) =>{
            if($el.text(sideMenu)){
               cy.get('span.sidenav-menu-items.no-child-title').eq(index).click();     
            }
        })
    }

    verifySummaryCardCount(count){
        cy.get('div.row.kpi mat-card.mat-card').should('have.length', count);
    }

}

export default DashboardPage;