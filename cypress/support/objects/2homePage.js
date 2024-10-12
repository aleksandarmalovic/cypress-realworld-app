class HomePage {
    get homeButton() {
       return cy.get('[data-test=sidenav-home]');
    }

    get myAccountButton() {
        return cy.get('[data-test=sidenav-user-settings]');
    }

    get bankAccountsButton() {
        return cy.get('[data-test=sidenav-bankaccounts]');
    }

    get notificationsButton() {
        return cy.get('[data-test=sidenav-notifications]');
    }

    clickHome() {
        this.homeButton.click();
    }

    clickMyAccount() {
        this.myAccountButton.click();
    }

    clickBankAccounts() {
        this.bankAccountsButton.click();
    }

    clickNotifications() {
        this.notificationsButton.click();
    }
}
export default new HomePage();