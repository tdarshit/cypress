class LoginPage{

    navigate(url){
        return cy.visit(url);
    }

    login(username, password){
        cy.get('input[name="username"]').type(username);
        cy.get('button[name="login"]').click();
        cy.get('input[name="password"]').type(password);
        cy.get('button[name="login"]').click();
        return this;
    }

    validationText(txt){
        return cy.get("div.header").should('have.text' ,txt);//contains(" ACA ComplianceAlpha® ");
    }
}
   
export default LoginPage;

