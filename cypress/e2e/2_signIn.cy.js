

describe('Validate fields and buttons', () => {

beforeEach(() => {
    cy.visit('/signin')
  });

    it('signUp redirection btn', () => {
        cy.get('[href="/signup"]').click()
        cy.url().should('eq', 'http://localhost:3000/signup')
    })

    it('Validate Remember me checkbox', () => {
        cy.get('[data-test="signin-remember-me"]').should('not.be.checked')

        cy.get('.PrivateSwitchBase-input').check()
        cy.get('.PrivateSwitchBase-input').should('be.checked')

        cy.get('.PrivateSwitchBase-input').uncheck()
        cy.get('.PrivateSwitchBase-input').should('not.be.checked')
    })

    it('Username field', () => {
        cy.get('[data-test="signin-password"]').type('123')
    })

    it('Password field', () => {
        cy.get('[data-test="signin-password"]').click
    })

    it('signinButton', () => {
        cy.get('[data-test="signin-submit"]')
            .should('not.be.disabled')
            .and('be.visible')
            .and('have.css', 'background-color', 'rgb(25, 118, 210)')
            .and('have.text', 'Sign In')
    })
})

describe('Validate signIn form', () => {

    beforeEach(() => {
        cy.visit('/signin');
    });

    it.only('Validate error message for wrong credentials', () => {
        const randomString = Math.random().toString(36).substring(2, 10);
        cy.get('[data-test="signin-username"]').type(randomString)
        cy.get('[data-test="signin-password"]').type(randomString)
        cy.get('[data-test="signin-submit"]').click()
        cy.url().should('eq', 'http://localhost:3000/signin')
    })

    it('Validate username is required', () => {
        //message text, red boarder

    })

    it('Password is required', () => {
        cy.get('[data-test="signin-password"]').click()
        cy.get('[data-test="signin-username"]').click()
        cy.contains('Password must contain at least 4 characters').should('not.exist')
        cy.get('[data-test="signin-password"]').type('123')
        cy.contains('Password must contain at least 4 characters').should('exist')
        cy.get('[data-test="signin-password"]').type('4')
        cy.contains('Password must contain at least 4 characters').should('not.exist')

    })

    it('Validate that sign in button is clickable after username and password 4 is filled', () => {
        //text
    })

    it('Validate that sign in button is not clickable if username did not exist', () => {
        //text
    })

    it('Validate that sign in button is not clickable if password have less than 4 characters', () => {
        //text
    })

    it('Validate successufuly sign in', () => {
        cy.get('[data-test="signin-username"]').type('blabla')
        cy.get('[data-test="signin-password"]').type('blabla')
        cy.get('[data-test="signin-submit"]').click()
    })

    it('Validate successufuly sign in', () => {
        cy.get('[data-test="signin-username"]').type('blabla')
        cy.get('[data-test="signin-password"]').type(logInPassword)
        cy.get('[data-test="signin-submit"]').click()
        cy.get('body').then(($body) => {
            if ($body.find('button[data-test="optional-button"]').length > 0) {
                // Button exists, click it
                cy.get('button[data-test="optional-button"]').click();
            } else {
                // Button doesn't exist, skipping the click
                cy.log('Button not found, skipping click.');
            }
        })
    })

})