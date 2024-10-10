describe('Validate signUp form', () => {
    beforeEach(() => {
        cy.visit('/signup')
    });


    it('Validate that validation text messages are not displayed when open singUp page', () => {
        cy.contains('First Name is required').should('not.exist')
        cy.contains('Last Name is required').should('not.exist')
        cy.contains('Username is required').should('not.exist')
        cy.contains('Enter your password').should('not.exist')
        cy.contains('Confirm your password').should('not.exist')
    })

    it('Validate that validation text messages are displayed when entered do not meet requrenmetns', () => {
        cy.get('[data-test="signup-last-name"]').click()
        cy.get('[data-test="signup-username"]').click()
        cy.get('[data-test="signup-password"]').click()
        cy.get('[data-test="signup-confirmPassword"]').click()
        cy.get('[data-test="signup-first-name"]').click()
        cy.contains('First Name is required')
        .should('exist')
        .and('have.css', 'color', 'rgb(211, 47, 47)')
        .and('have.css', 'border-color', 'rgb(211, 47, 47)')
        cy.contains('Last Name is required')
        .should('exist')
        .and('have.css', 'color', 'rgb(211, 47, 47)')
        .and('have.css', 'border-color', 'rgb(211, 47, 47)')
        cy.contains('Username is required')
        .should('exist')
        .and('have.css', 'color', 'rgb(211, 47, 47)')
        .and('have.css', 'border-color', 'rgb(211, 47, 47)')
        cy.contains('Enter your password')
        .should('exist')
        .and('have.css', 'color', 'rgb(211, 47, 47)')
        .and('have.css', 'border-color', 'rgb(211, 47, 47)')
        cy.contains('Confirm your password')
        .should('exist')
        .and('have.css', 'color', 'rgb(211, 47, 47)')
        .and('have.css', 'border-color', 'rgb(211, 47, 47)')
    })

    it('Validate signUp button clickability', () => {
        cy.get('[data-test="signup-last-name"]').click()
        cy.get('[data-test="signup-submit"]').should('be.disabled')
        cy.signUpTest()
        cy.get('[data-test="signup-submit"]').should('be.enabled')
    })

    it('Validate that SIGN UP button is not clickable when First Name input field is empty', () => {
        cy.signUpTest()
        cy.get('[data-test="signup-first-name"]').clear()
        cy.get('[data-test="signup-submit"]').should('be.disabled')

    })
    it('Validate that SIGN UP button is not clickable when Last Name input field is empty', () => {
        cy.signUpTest()
        cy.get('[data-test="signup-last-name"]').clear()
        cy.get('[data-test="signup-submit"]').should('be.disabled')
    })
    it('Validate that SIGN UP button is not clickable when Userame input field is empty', () => {
        cy.signUpTest()
        cy.get('[data-test="signup-username"]').clear()
        cy.get('[data-test="signup-submit"]').should('be.disabled')
    })
    it('Validate that SIGN UP button is not clickable when Password input field is empty', () => {
        cy.signUpTest()
        cy.get('[data-test="signup-password"]').clear()
        cy.get('[data-test="signup-submit"]').should('be.disabled')
    })

    it('Validate that SIGN UP button is not clickable when Confirm Password input field is empty', () => {
        cy.signUpTest()
        cy.get('#confirmPassword').clear()
        cy.get('[data-test="signup-submit"]').should('be.disabled')
    })
    
    it('Validate minimum 4 charackters password message', () => {
        cy.contains('Password must contain at least 4 characters').should('not.exist')
        cy.get('[data-test="signup-password"]').type('123')
        cy.contains('Password must contain at least 4 characters').should('exist')
        cy.get('[data-test="signup-password"]').type('4')
        cy.contains('Password must contain at least 4 characters').should('not.exist')
    })

    it('First Name, Last Name and Username shoud have at least 1 character', () => {
        cy.get('[data-test="signup-password"]').clear().type('123')     
    })

    it('signIn redirection btn', () => {
        cy.get('[href="/signin"]')
            .should('have.text', 'Have an account? Sign In')
        cy.get('[href="/signin"]').click()
        cy.url().should('eq', 'http://localhost:3000/signin')
    })

    it('Successfully signUp', () => {
        cy.signUpTest()
        cy.get('[data-test="signup-submit"]').click()
        cy.url().should('eq', 'http://localhost:3000/signin')
    })

    it('signUp and sign in', () => {
        cy.signUp()
        cy.get('[data-test="signup-submit"]').click()
        cy.url().should('eq', 'http://localhost:3000/signin')
        cy.signIn()
        cy.get('[data-test="signin-submit"]').click()
        cy.url().should('eq', 'http://localhost:3000/')
    })
    
})