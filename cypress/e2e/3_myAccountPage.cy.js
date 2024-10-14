import {createBankPopUpModal, myAccount} from '../support/Locators/2applicationLocators'
import { signinLocators } from "../support/Locators/1loginLocators";

const testUser = Cypress.env("test_user")

describe('My Acc tests', () => {

beforeEach(() => {
    cy.visit('/signin')
    cy.signInType(testUser.username, testUser.password)
    cy.get(signinLocators.signinButton).click()
    cy.wait(2000)
    cy.dinamicBtnClick(createBankPopUpModal.nextBtn)
    cy.dinamicCreateBankAccount()
    cy.wait(2000)
    cy.dinamicBtnClick(createBankPopUpModal.nextBtn)
})

    it('Making changes to my account page and verify data is preserved', () => {
        cy.get(myAccount.myAccountSection).click()
        cy.get(myAccount.firstNameInputField).clear().type('edit test')
        cy.get(myAccount.lastNameInputField).clear().type('edit test')
        cy.get(myAccount.emailInputField).clear().type('malovicedited@malovic.com')
        cy.get(myAccount.phoneNumberINputField).clear().type('123456')
        cy.get(myAccount.saveBtn).click()
        cy.wait(2000)
        cy.reload(true)
        cy.wait(2000)
        cy.get(myAccount.firstNameInputField).should('value', 'edit test')
        cy.get(myAccount.lastNameInputField).should('value', 'edit test')
        cy.get(myAccount.emailInputField).should('value', 'malovicedited@malovic.com')
        cy.get(myAccount.phoneNumberINputField).should('value', '123456')
    })
})