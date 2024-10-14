import { signinLocators } from "../support/Locators/1loginLocators";
import { beforeEach } from 'mocha'

const testUser = Cypress.env("test_user")

describe('Validate fields and buttons', () => {

beforeEach(() => {
    cy.visit('/signin')
});

    it('Validate signUp redirection btn functionality', () => {
        cy.get(signinLocators.signUpRedirectionBtn)
            .should('have.text', 'Don\'t have an account? Sign Up')
        cy.get(signinLocators.signUpRedirectionBtn).click()
        cy.url().should('eq', 'http://localhost:3000/signup')
    })

    it('Validate Remember me checkbox', () => {
        cy.get(signinLocators.rememberMeCheck).should('not.be.checked')

        cy.get('.PrivateSwitchBase-input').check()
        cy.get('.PrivateSwitchBase-input').should('be.checked')

        cy.get('.PrivateSwitchBase-input').uncheck()
        cy.get('.PrivateSwitchBase-input').should('not.be.checked')
    })

    it('Username is required and should have at least 1 character', () => {
        cy.signInFilled()
        cy.get(signinLocators.username).clear()
        cy.get(signinLocators.signinButton).should('be.disabled')
        cy.get(signinLocators.username).type('1')
        cy.get(signinLocators.signinButton).should('be.enabled')
    })

    it('Validate minimum 4 characters password message', () => {
        cy.contains('Password must contain at least 4 characters').should('not.exist')
        cy.get(signinLocators.password).type('123')
        cy.get(signinLocators.username).click()
        cy.contains('Password must contain at least 4 characters').should('exist')
        cy.get(signinLocators.password).type('4')
        cy.contains('Password must contain at least 4 characters').should('not.exist')
    })

    it('signinButton', () => {
        cy.get(signinLocators.signinButton)
            .should('not.be.disabled')
            .and('be.visible')
            .and('have.css', 'background-color', 'rgb(25, 118, 210)')
            .and('have.text', 'Sign In')
    })
    it('Validate SIGN IN button clickability when all fields are field', () => {
        cy.signInFilled()
        cy.get(signinLocators.username).clear()
        cy.get(signinLocators.signinButton).should('be.disabled')
    })
    it('Validate that SIGN IN button is disabled when username is empty and password have at least 4 characters', () => {
        cy.signInType('1', '1234')
        cy.get(signinLocators.username).clear()
        cy.get(signinLocators.signinButton).should('be.disabled')
    })

    it('Validate that SIGN IN button is disabled when password is empty and username have at least 1 character', () => {
        cy.signInType('1', '1')
        cy.get('#password').clear()
        cy.get(signinLocators.signinButton).should('be.disabled')
    })

    it('Validate that SIGN IN button is not clickable when only Username input field is empty', () => {
        cy.signInFilled()
        cy.get(signinLocators.signinButton).should('be.enabled')
        cy.get(signinLocators.username).clear()
        cy.get(signinLocators.signinButton).should('be.disabled')
    })

})

describe('Validate signIn form', () => {

beforeEach(() => {
    cy.visit('/signin');
});

    it('Validate that user cannot log in with wrong (random) credentials', () => {
        const randomString = Math.random().toString(36).substring(2, 10);
        cy.get(signinLocators.username).type(randomString)
        cy.get(signinLocators.password).type(randomString)
        cy.get(signinLocators.signinButton).click()
        cy.url().should('eq', 'http://localhost:3000/signin')
    })

    it('Validate successufuly sign in', () => {
        cy.successfullSignin(testUser.username, testUser.password)
    })  
})