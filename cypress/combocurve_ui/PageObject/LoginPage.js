class LoginPage{

   navigate(){
        cy.visit("http://13.85.186.251:5000/login");
    }

    enterEmailAddress(email){
        cy.get('#email').type(email);
        return this;
    }

    enterPassword(password){
        cy.get('#password').type(password);
        return this;
    }

    clickLogin(){
        cy.get('.btn.btn-primary').click();
    }

}

export default LoginPage