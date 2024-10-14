import {createBankPopUpModal, transactions} from '../support/Locators/2applicationLocators'

const testUser = Cypress.env("test_user")

describe('Validate random Transaction', () => {

    beforeEach(() => {
        cy.visit('/signin')
        cy.successfullSignin(testUser.username,testUser.password)
        cy.wait(2000)
        cy.dinamicBtnClick(createBankPopUpModal.nextBtn)
        cy.dinamicCreateBankAccount()
        cy.wait(2000)
        cy.dinamicBtnClick(createBankPopUpModal.nextBtn)
    })

    it('Create and validate Transaction', () => {
        cy.get(transactions.newTransactionBtn).click()
        cy.get(transactions.searchBar)
        .click({force: true})
        .type('aleksandar')
        cy.get(transactions.usersList)
        .contains('aleksandar')
        .first()
        .click({force: true})
        cy.get(transactions.amountInputField).type('2')
        cy.get(transactions.noteInputField).type('test note')
        cy.get(transactions.payBtn)
        .should('be.enabled')
        .click()
        cy.get(transactions.transactionSubmitedPopUp)
        .should('be.visible')
        .and('have.text', 'Transaction Submitted!')
        cy.get(transactions.homeSectionBtn).click()
        cy.get(transactions.mineTransactionBtn).click()
        cy.get(transactions.transactionList)
        .should('contain', '2')
        // cy.get(transactions.accountBalance).invoke('text').then((text) => {
        //     expect(text).to.not.equal('$0.00');
        // });
    })

    it('Validate that transaction is present in /persinal page', () => {
        cy.get(transactions.mineTransactionBtn).click()
        cy.get(transactions.mineTransactionBtn).click()
        cy.get(transactions.transactionList)
        .should('contain', '2')
    })

    it.only('Validate multiple transaction', () => {

        const transactionsValue = [
            { amount: '50', note: 'Payment 1', searchTerm: 'aleksandar' },
            { amount: '75', note: 'Payment 2', searchTerm: 'aleksandar' },
            { amount: '100', note: 'Payment 3', searchTerm: 'aleksandar' },
          ];
        // cy.get(transactions.newTransactionBtn).click()
        // cy.get(transactions.searchBar)
        // .click({force: true})
        // .type('aleksandar')
        // cy.get(transactions.usersList)
        // .contains('aleksandar')
        // .first()
        // .click({force: true})

        // transactionsValue.forEach((transaction) => {
        //     cy.createTransaction(transaction.amount, transaction.note, transaction.searchTerm);
        //   });

        // cy.get(transactions.homeSectionBtn).click()
        // cy.get(transactions.mineTransactionBtn).click()
        cy.get(transactions.amountFilter).click({force:true})
        cy.wait(2000)
        
        // cy.get('[data-test="transaction-list-filter-amount-range-slider"]')
        // .invoke('attr', 'style', 'left: 13%; width: 87%')
        cy.get('input[data-index="0"]')
        .eq(0)
        .invoke('attr', 'style', 'left: 13%;')
        .invoke('attr', 'aria-valuenow', '13')
        cy.wait(2000)
        cy.get('input[data-index="0"]')
        .invoke('attr', 'style', 'left: 13%;')
        cy.wait(2000)
        cy.get('input[data-index="0"]')
        .eq(0)
        .invoke('attr', 'style', 'left: 13%;')
        .invoke('attr', 'aria-valuenow', '13')
        // .invoke('attr', 'value', '13')
        
        // .trigger('change')
        cy.get('input[data-index="0"]')
        .invoke('attr', 'style', 'left: 13%;')

        // cy.get(transactions.amountFilterSlider)
        // .invoke('aria-valuenow', '30') // Set slider value to 50 (range between 0-100 or whatever the slider's range is)
        // .trigger('input');
        // cy.get(transactions.amountFilterSlider)
        // .invoke('attr','aria-valuenow', '60') // Set slider value to 50 (range between 0-100 or whatever the slider's range is)
        // .trigger('input');
        // cy.get(transactions.transactionList)
        // .should('contain', '50')
        // .and('contain', '75')
        // .and('contain', '100')
    })

})

