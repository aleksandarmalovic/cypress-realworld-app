// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --

// const cypress = require("cypress");

// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// const randomString = Math.random().toString(36).substring(2, 10);
// const firstName = `firstName_${randomString}`;
// const lastName = `lastName_${randomString}`;
// const userName = `user_${randomString}`;
// const password = `pw_${randomString}`;

// Cypress.Commands.add('signup', () => {
//     cy.get('[data-test="signup-first-name"]').type('first name')
//     cy.get('[data-test="signup-last-name"]').type('last name')
//     cy.get('[data-test="signup-username"]').type('user name')
//     cy.get('[data-test="signup-password"]').type('123a')
//     cy.get('[data-test="signup-confirmPassword"]').type('123a')
// })



Cypress.Commands.add('signin', () => {    
    cy.get('[data-test="signin-username"]').type(logInUserName)
    cy.get('[data-test="signin-password"]').type(logInPassword)
    cy.get('[data-test="signin-submit"]').click()
    cy.get('body').then(($body) => {
        if ($body.find('button[data-test="optional-button"]').length > 0) {
          // Button exists, click it
          cy.get('button[data-test="optional-button"]').click();
        } else {
          // Button doesn't exist, skipping the click
          cy.log('Button not found, skipping click.');
        }
      })
})

Cypress.Commands.add('clickButton', (locator) => {
    cy.get(locator).click()
})

Cypress.Commands.add('checkColor', (locator, text, expectedColor) => {
    cy.contains(text).should('have.css', 'color', expectedColor)
})

Cypress.Commands.add('checkBorderColor', (locator, text, expectedBorderColor) => {
    cy.contains(text).should('have.css', 'border-color', expectedBorderColor);
})

Cypress.Commands.add('enterTextInField', (locator, text) => {
    cy.get(locator).type(text);
});

Cypress.Commands.add('signUpFilled', () => {
  cy.get('[data-test="signup-first-name"]').type('test');
  cy.get('[data-test="signup-last-name"]').type('test');
  cy.get('[data-test="signup-username"]').type('test');
  cy.get('[data-test="signup-password"]').type('test');
  cy.get('[data-test="signup-confirmPassword"]').type('test');
})

Cypress.Commands.add('signUpType', (firstName, lastName, username, password, confirmPassword) => { 
  cy.get('[data-test="signup-first-name"]').type(firstName);
  cy.get('[data-test="signup-last-name"]').type(lastName);
  cy.get('[data-test="signup-username"]').type(username);
  cy.get('[data-test="signup-password"]').type(password);
  cy.get('[data-test="signup-confirmPassword"]').type(confirmPassword);
})

Cypress.Commands.add('signInFilled', () => {
    cy.get('[data-test="signin-username"]').type('test')
    cy.get('[data-test="signin-password"]').type('test')
})

Cypress.Commands.add('signInType', (username, password) => {
  cy.get('[data-test="signin-username"]').type(username)
  cy.get('[data-test="signin-password"]').type(password)
})

Cypress.Commands.add('randomCredentials', (firstName, lastName, username, password, confirmPassword) => { 
  cy.get('[data-test="signup-first-name"]').type(firstName);
  cy.get('[data-test="signup-last-name"]').type(lastName);
  cy.get('[data-test="signup-username"]').type(username);
  cy.get('[data-test="signup-password"]').type(password);
  cy.get('[data-test="signup-confirmPassword"]').type(confirmPassword);
})






