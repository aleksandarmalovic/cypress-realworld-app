import HomePage from "../support/objects/2homePage"
import LoginPage from '../support/objects/1loginPage'
import { signupLocators } from '../support/Locators/1loginLocators'

const randomString = Math.random().toString(36).substring(2, 9);

describe('My Acc tests', () => {
    it('Validate user onbording dialog title on first sign in', () => {
        cy.visit('/signup')
        cy.signUpType(randomString, randomString, randomString, randomString, randomString, randomString)
        cy.get(signupLocators.signupButton).click()
        cy.url().should('eq', 'http://localhost:3000/signin')
        cy.signInType(randomString, randomString)
        cy.url().should('eq', 'http://localhost:3000/')
        cy.get('[data-test="user-onboarding-dialog-title"]')
            .should('be.visible')
            .and('have.text', 'Get Started with Real World App')
        cy.get('[data-test="user-onboarding-next"]')
            .should('be.visible')
            .and('have.text', 'Next')
            .and('be.enabled')
    })

    it('Validate user onbording dialog title on first sign in2', () => {
        cy.visit('/signin')
        cy.signInType(randomString, randomString)
    })

    it('Making changes to my account page', () => {
        HomePage.clickMyAccount()
        cy.url().should('eq', 'http://localhost:3000/user/settings')

    })
})





// describe('Validate that modifications are preserved after revisiting the page', () => {


//     it('Edit data', () => {
//         //text
//     })

// })