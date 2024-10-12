import bankAccountsPage from "../support/objects/bankAccountsPage"
import signIn from "../support/objects/1loginPage";

describe('Create Bank Account validation tests', () => {


    // it('Validate that bank name must have at least 5 charackters', () => {
    //     //text
    // })

    // it('ruting number must have 9 charackters', () => {
    //     //text
    // })

    // it('validate that bank account number should be between 9 and 12 charackters', () => {
    //     //text
    // })

    // it('Validate that bank account is created', () => {
    //     //text
    // })


///

// beforeEach(() => {
//     cy.visit('/signin')
//     cy.signInTest()
//     cy.get('[data-test="signin-submit"]').click()
//     cy.visit('/bankaccounts')
// })

it('should display the create button', () => {
    cy.get(bankAccountsPage.createButton).should('be.visible').and('contain', 'Create')
})

it('should have a list of bank accounts', () => {
    cy.get(bankAccountsPage.bankAccountList).should('be.visible')
})

it('should allow creating a new bank account', () => {
    bankAccountsPage.clickCreateButton();
    // Add additional assertions for new account creation page if available
})

it('should display bank accounts', () => {
    bankAccountsPage.getBankAccountCount().then(count => {
        expect(count).to.be.greaterThan(0)
    })
})

it('should delete a bank account', () => {
    bankAccountsPage.getBankAccountCount().then(count => {
        if (count > 0) {
            bankAccountsPage.clickDeleteButton(0)
            bankAccountsPage.confirmDeletion()
            bankAccountsPage.assertBankAccountCount(count - 1)
        } else {
            cy.log('No bank accounts to delete')
        }
    })
})

it('Create bank account filling all fields with 9 characters', () => {
    const accountNumber = '123456'; // Example account number
    bankAccountsPage.assertBankAccountExists(accountNumber);
})
})