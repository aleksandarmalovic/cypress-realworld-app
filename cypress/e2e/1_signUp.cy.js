import { signupLocators } from '../support/Locators/1loginLocators'
import { beforeEach } from 'mocha'

const testUser = Cypress.env("test_user")

describe('Validate signUp form', () => {

    beforeEach(() => {
        cy.visit('/signup')
    })

    it('Validate minimum 4 characters password message', () => {
        cy.contains('Password must contain at least 4 characters').should('not.exist')
        cy.get(signupLocators.password).type('123')
        cy.contains('Password must contain at least 4 characters').should('exist')
        cy.get(signupLocators.password).type('4')
        cy.contains('Password must contain at least 4 characters').should('not.exist')
    })

    it('Validate Password does not match for different Confirm Password and Password inputs', () => {
        cy.contains('Password must contain at least 4 characters').should('not.exist')
    })

    it('First Name is required and should have at least 1 character', () => {
        cy.signUpFilled()
        cy.get(signupLocators.firstName).clear()
        cy.get(signupLocators.signupButton).should('be.disabled')
        cy.get(signupLocators.firstName).type('1')
        cy.get(signupLocators.signupButton).should('be.enabled')
    })

    it('Last Name is required and should have at least 1 character', () => {
        cy.signUpFilled()
        cy.get(signupLocators.lastName).clear()
        cy.get(signupLocators.signupButton).should('be.disabled')
        cy.get(signupLocators.lastName).type('1')
        cy.get(signupLocators.signupButton).should('be.enabled')
    })

    it('Username is required and should have at least 1 character', () => {
        cy.signUpFilled()
        cy.get(signupLocators.username).clear()
        cy.get(signupLocators.signupButton).should('be.disabled')
        cy.get(signupLocators.username).type('1')
        cy.get(signupLocators.signupButton).should('be.enabled')
    })

    it('signIn redirection btn', () => {
        cy.get(signupLocators.signInRedirectionBtn)
            .should('have.text', 'Have an account? Sign In')
        cy.get(signupLocators.signInRedirectionBtn).click()
        cy.url().should('eq', 'http://localhost:3000/signin')
    })

    it('Validate that validation text messages are not displayed when open singUp page', () => {
        cy.contains('First Name is required').should('not.exist')
        cy.contains('Last Name is required').should('not.exist')
        cy.contains('Username is required').should('not.exist')
        cy.contains('Enter your password').should('not.exist')
        cy.contains('Confirm your password').should('not.exist')
    })

    it('Validate that validation text messages are displayed when entered do not meet requrenmetns', () => {
        cy.get(signupLocators.lastName).click()
        cy.get(signupLocators.username).click()
        cy.get(signupLocators.password).click()
        cy.get(signupLocators.confirmPassword).click()
        cy.get(signupLocators.firstName).click()

        cy.checkColor(signupLocators.firstName, 'First Name is required', 'rgb(211, 47, 47)')
        cy.checkBorderColor(signupLocators.firstName, 'First Name is required', 'rgb(211, 47, 47)')

        cy.checkColor(signupLocators.lastName, 'Last Name is required', 'rgb(211, 47, 47)')
        cy.checkBorderColor(signupLocators.lastName, 'Last Name is required', 'rgb(211, 47, 47)')

        cy.checkColor(signupLocators.username, 'Username is required', 'rgb(211, 47, 47)')
        cy.checkBorderColor(signupLocators.username, 'Username is required', 'rgb(211, 47, 47)')

        cy.checkColor(signupLocators.password, 'Enter your password', 'rgb(211, 47, 47)')
        cy.checkBorderColor(signupLocators.password, 'Enter your password', 'rgb(211, 47, 47)')

        cy.checkColor(signupLocators.confirmPassword, 'Confirm your password', 'rgb(211, 47, 47)')
        cy.checkBorderColor(signupLocators.confirmPassword, 'Confirm your password', 'rgb(211, 47, 47)')
    })
})

describe('Validate SIGN UP button clickability', () => {

    beforeEach(() => {
        cy.visit('/signup')
    })

    it('Validate SIGN UP button clickability when all fields are field', () => {
        cy.get(signupLocators.lastName).click()
        cy.get(signupLocators.signupButton).should('be.disabled')
        cy.signUpFilled()
        cy.get(signupLocators.signupButton).should('be.enabled');
    })

    it('Validate that SIGN UP button is not clickable when only First Name input field is empty', () => {
        cy.signUpFilled()
        cy.get(signupLocators.firstName).clear()
        cy.get(signupLocators.signupButton).should('be.disabled')
    })
    it('Validate that SIGN UP button is not clickable when only Last Name input field is empty', () => {
        cy.signUpFilled()
        cy.get(signupLocators.lastName).clear()
        cy.get(signupLocators.signupButton).should('be.disabled')
    })
    it('Validate that SIGN UP button is not clickable when only Username input field is empty', () => {
        cy.signUpFilled()
        cy.get(signupLocators.username).clear()
        cy.get(signupLocators.signupButton).should('be.disabled')
    })
    it('Validate that SIGN UP button is not clickable when Password input field is empty', () => {
        cy.signUpFilled()
        cy.get(signupLocators.password).clear()
        cy.get(signupLocators.signupButton).should('be.disabled')
    })

    it('Validate that SIGN UP button is not clickable when Confirm Password input field is empty', () => {
        cy.signUpFilled()
        cy.get('#confirmPassword').clear()
        cy.get(signupLocators.signupButton).should('be.disabled')
    })

})

describe('Successfully SIGN UP', () => {

    beforeEach(() => {
        cy.visit('/signup')
    })

    it('Sign up with valid credentials', () => {
        cy.signUpType(testUser.firstname, testUser.lastname, testUser.username, testUser.password, testUser.confirmpassword)
        cy.get(signupLocators.signupButton).click()
        cy.url().should('eq', 'http://localhost:3000/signin')
    })

})