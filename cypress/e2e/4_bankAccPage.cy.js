import {createBankPopUpModal, bankAccounts} from '../support/Locators/2applicationLocators'

const createBankCredentials = Cypress.env("createBankCredentials")
const testUser = Cypress.env("test_user")

describe('Create Bank Account validation tests', () => {

    it('Successully create bank account and verify that it is displayed in the list', () => {
        cy.visit('/signin')
        cy.successfullSignin(testUser.username, testUser.password)
        cy.wait(2000)
        cy.dinamicBtnClick(createBankPopUpModal.nextBtn)
        cy.dinamicCreateBankAccount()
        cy.wait(2000)
        cy.dinamicBtnClick(createBankPopUpModal.nextBtn)
        cy.get(bankAccounts.bankAccountsSection).click()
        cy.get(bankAccounts.createBankAccBtn).click()
        cy.get(bankAccounts.bankNameInputField).type(createBankCredentials.bankName)
        cy.get(bankAccounts.bankRoutingNumberInputField).type(createBankCredentials.routingNubmer)
        cy.get(bankAccounts.bankAccountNumberInputFIeld).type(createBankCredentials.accountNubmer)
        cy.get(bankAccounts.saveBtn).click()
        cy.wait(1000)
        cy.get(bankAccounts.bankAccList).should('contain.text', createBankCredentials.bankName)
    })
})