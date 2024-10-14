const createBankPopUpModal = {
    createBankAccTitle: '[data-test=user-onboarding-dialog-title]',
    bankNameInputField: '[data-test="bankaccount-bankName-input"]',
    routingNumberInputField: '[data-test="bankaccount-routingNumber-input"]',
    accountNumberInputField: '[data-test="bankaccount-accountNumber-input"]',
    saveBtn: '[data-test="bankaccount-submit"]',
    nextBtn: '[data-test="user-onboarding-next"]'
  }

const myAccount = {
    myAccountSection: '[data-test="sidenav-user-settings"]',
    firstNameInputField: '[data-test="user-settings-firstName-input"]',
    lastNameInputField: '[data-test="user-settings-lastName-input"]',
    emailInputField: '[data-test="user-settings-email-input"]',
    phoneNumberINputField: '[data-test="user-settings-phoneNumber-input"]',
    saveBtn: '[data-test="user-settings-submit"]'
}

const bankAccounts = {
    bankAccountsSection: '[data-test="sidenav-bankaccounts"]',
    createBankAccBtn: '[data-test="bankaccount-new"]',
    bankNameInputField: '[data-test="bankaccount-bankName-input"]',
    bankRoutingNumberInputField: '[data-test="bankaccount-routingNumber-input"]',
    bankAccountNumberInputFIeld: '[data-test="bankaccount-accountNumber-input"]',
    saveBtn: '[data-test="bankaccount-submit"]',
    bankAccList: '[data-test="bankaccount-list"]'
}

const transactions = {
    newTransactionBtn: '[data-testid="AttachMoneyIcon"]',
    searchBar: '[data-test="user-list-search-input"]',
    usersList: '[data-test="users-list"]',
    amountInputField: '[data-test="transaction-create-amount-input"]',
    noteInputField: '[data-test="transaction-create-description-input"]',
    payBtn: '[data-test="transaction-create-submit-payment"]',
    transactionSubmitedPopUp: '[data-test="alert-bar-success"]',
    transactionPaidText: '[data-test="main"]',
    homeSectionBtn: '[data-test="sidenav-home"]',
    mineTransactionBtn: '[data-test="nav-personal-tab"]',
    transactionList: '[data-test="transaction-list"]',
    accountBalance: '[data-test="sidenav-user-balance"]',
    anotherTransactionBtn: '[data-test="new-transaction-create-another-transaction"]',
    amountFilter: '[data-test="transaction-list-filter-amount-range-button"]',
    amountFilterSlider: '[data-test="transaction-list-filter-amount-range-slider"]',
    range: '[data-test="transaction-list-filter-amount-range"]'

}


  export {createBankPopUpModal, myAccount, bankAccounts, transactions}