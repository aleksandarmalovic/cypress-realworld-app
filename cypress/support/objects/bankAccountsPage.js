class BankAccountsPage {
    get createButton() {
        return cy.get('[data-test="bankaccount-new"]')
    }

    get bankAccountList() {
        cy.get('[data-test="bankaccount-list"]')
    }

    get bankAccountItems() {
        cy.get('[data-test^="bankaccount-list-item"]')
    }

    get deleteButtons() {
        cy.get('[data-test="bankaccount-delete"]')
    }

    // visit() {
    //     cy.visit('/bankaccounts');
    // }

    clickCreateButton() {
        cy.get(this.createButton).click();
    }

    getBankAccountCount() {
        return cy.get(this.bankAccountItems).its('length');
    }

    clickDeleteButton(index) {
        cy.get(this.deleteButtons).eq(index).click();
    }

    confirmDeletion() {
        cy.on('window:confirm', () => true);
    }

    assertBankAccountExists(accountNumber) {
        cy.get(this.bankAccountList).contains(accountNumber).should('exist');
    }

    assertBankAccountCount(count) {
        this.getBankAccountCount().should('eq', count);
    }
}
export default new BankAccountsPage();