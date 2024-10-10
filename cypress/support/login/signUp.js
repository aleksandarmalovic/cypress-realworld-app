const randomString = Math.random().toString(36).substring(2, 10);
const firstName = `firstName_${randomString}`;
const lastName = `lastName_${randomString}`;
const userName = `user_${randomString}`;
const password = `pw_${randomString}`;

Cypress.Commands.add('signUp', () => {
    cy.get('[data-test="signup-first-name"]').type(firstName)
    cy.get('[data-test="signup-last-name"]').type(lastName)
    cy.get('[data-test="signup-username"]').type(userName)
    cy.get('[data-test="signup-password"]').type(password)
    cy.get('[data-test="signup-confirmPassword"]').type(password)
})

Cypress.Commands.add('signIn', () => {
    cy.get('[data-test="signin-username"]').type(userName)
    cy.get('[data-test="signin-password"]').type(password)
})

Cypress.Commands.add('signUpTest', () => {
    cy.get('[data-test="signup-first-name"]').type('aleksandar')
    cy.get('[data-test="signup-last-name"]').type('malovic')
    cy.get('[data-test="signup-username"]').type('test')
    cy.get('[data-test="signup-password"]').type('test')
    cy.get('[data-test="signup-confirmPassword"]').type('test')
})

Cypress.Commands.add('signInTest', () => {
    cy.get('[data-test="signin-username"]').type('test')
    cy.get('[data-test="signin-password"]').type('test')
})