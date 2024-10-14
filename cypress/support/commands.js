const testUser = Cypress.env("test_user")
const createBankCredentials = Cypress.env("createBankCredentials")

// Cypress.Commands.add('signin', () => {
//   cy.get('[data-test="signin-username"]').type(logInUserName)
//   cy.get('[data-test="signin-password"]').type(logInPassword)
//   cy.get('[data-test="signin-submit"]').click()
//   cy.get('body').then(($body) => {
//     if ($body.find('button[data-test="optional-button"]').length > 0) {
//       cy.get('button[data-test="optional-button"]').click()
//     } else {
//       cy.log('Button not found, skipping click.')
//     }
//   })
// })

Cypress.Commands.add('clickButton', (locator) => {
  cy.get(locator).click()
})

Cypress.Commands.add('checkColor', (locator, text, expectedColor) => {
  cy.contains(text).should('have.css', 'color', expectedColor)
})

Cypress.Commands.add('checkBorderColor', (locator, text, expectedBorderColor) => {
  cy.contains(text).should('have.css', 'border-color', expectedBorderColor)
})

Cypress.Commands.add('enterTextInField', (locator, text) => {
  cy.get(locator).type(text)
})

Cypress.Commands.add('signUpFilled', () => {
  cy.get('[data-test="signup-first-name"]').type('test')
  cy.get('[data-test="signup-last-name"]').type('test')
  cy.get('[data-test="signup-username"]').type('test')
  cy.get('[data-test="signup-password"]').type('test')
  cy.get('[data-test="signup-confirmPassword"]').type('test')
})

Cypress.Commands.add('signUpType', (firstName, lastName, username, password, confirmPassword) => {
  cy.get('[data-test="signup-first-name"]').type(firstName)
  cy.get('[data-test="signup-last-name"]').type(lastName)
  cy.get('[data-test="signup-username"]').type(username)
  cy.get('[data-test="signup-password"]').type(password)
  cy.get('[data-test="signup-confirmPassword"]').type(confirmPassword)
})

Cypress.Commands.add('signInFilled', () => {
  cy.get('[data-test="signin-username"]').type('test')
  cy.get('[data-test="signin-password"]').type('test')
})

Cypress.Commands.add('signInType', (username, password) => {
  cy.get('[data-test="signin-username"]').type(username)
  cy.get('[data-test="signin-password"]').type(password)
  cy.get('body').then(($body) => {
    if ($body.find('[data-test="user-onboarding-next"]').length > 0) {
      // Button exists
      cy.get('[data-test="user-onboarding-next"]').click();
    } else {
      // Button does not exist
      cy.log('Button does not exist');
    }
  })
})

Cypress.Commands.add('randomCredentials', (firstName, lastName, username, password, confirmPassword) => {
  cy.get('[data-test="signup-first-name"]').type(firstName)
  cy.get('[data-test="signup-last-name"]').type(lastName)
  cy.get('[data-test="signup-username"]').type(username)
  cy.get('[data-test="signup-password"]').type(password)
  cy.get('[data-test="signup-confirmPassword"]').type(confirmPassword)
})

Cypress.Commands.add('successfullSignin', (username, password) => {
  cy.get('[data-test="signin-username"]').type(username)
  cy.get('[data-test="signin-password"]').type(password)
  cy.get('[data-test="signin-submit"]').click()
  cy.wait(2000)
  cy.get('body').then(($body) => {
    if ($body.find('[data-test="user-onboarding-next"]').length > 0) {
      // Button exists
      cy.get('[data-test="user-onboarding-next"]').click();
      // cy.url().should('eq', 'http://localhost:3000/')
    } else {
      // Button does not exist
      cy.log('Button does not exist');
      // cy.url().should('eq', 'http://localhost:3000/')
    }
  })
})

Cypress.Commands.add('dinamicBtnClick', (locator) => {
  cy.get('body').then(($body) => {
    if ($body.find(locator).length > 0) {
      cy.get(locator).click()
    } else {
      cy.log('Button does not exist')
    }
  })
})

Cypress.Commands.add('dinamicCreateBankAccount', () => {
  cy.get('body').then(($body) => {
    if ($body.find('[data-test=user-onboarding-dialog-title]').length > 0) {
      cy.get('[data-test="bankaccount-bankName-input"]').type(createBankCredentials.bankName)
      cy.get('[data-test="bankaccount-routingNumber-input"]').type(createBankCredentials.routingNubmer)
      cy.get('[data-test="bankaccount-accountNumber-input"]').type(createBankCredentials.accountNubmer)
      cy.get('[data-test="bankaccount-submit"]').click()
    } else {
      cy.log('Modal does not exist')
    }
  })
})

Cypress.Commands.add('dinamicCreateBankAccount', () => {
  cy.get('body').then(($body) => {
    if ($body.find('[data-test=user-onboarding-dialog-title]').length > 0) {
      cy.get('[data-test="bankaccount-bankName-input"]').type(createBankCredentials.bankName)
      cy.get('[data-test="bankaccount-routingNumber-input"]').type(createBankCredentials.routingNubmer)
      cy.get('[data-test="bankaccount-accountNumber-input"]').type(createBankCredentials.accountNubmer)
      cy.get('[data-test="bankaccount-submit"]').click()
    } else {
      cy.log('Modal does not exist')
    }
  })
})

Cypress.Commands.add('createTransaction', (amount, note, searchTerm) => {
  cy.get('[data-test="transaction-create-amount-input"]').type(amount);
  cy.get('[data-test="transaction-create-description-input"]').type(note);
  cy.get('[data-test="transaction-create-submit-payment"]').click();
  cy.get('[data-test="new-transaction-create-another-transaction"]').click();
  cy.get('[data-test="user-list-search-input"]').type(searchTerm, { force: true });
  cy.get('[data-test="users-list"]').contains('Ted Parisian').first().click({ force: true })
})