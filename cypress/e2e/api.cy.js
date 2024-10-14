import { signinLocators } from "../support/Locators/1loginLocators";
import { beforeEach } from 'mocha'

const testUser = Cypress.env("test_user")
const createBankCredentials = Cypress.env("createBankCredentials")
const createBankCredentials2 = Cypress.env("createBankCredentials")


describe ('Api testiranje', () => {

    it('test1', () => {
      cy.request({
        method: 'POST',
        url: `${Cypress.env('apiUrl')}/login`,
        body: {
          username: testUser.username,
          password: testUser.password,
        }
      })
    })
})

describe('API Test for /graphql - ListBankAccount', () => {
    it('Should validate bank account information via ListBankAccount GraphQL query', () => {
      cy.request({
        method: 'POST',
        url: `${Cypress.env('apiUrl')}/login`,
        body: {
          username: testUser.username,
          password: testUser.password,
        }
      })
      cy.request({
        method: 'POST',
        url: `${Cypress.env('apiUrl')}/graphql`,
        body: {
          operationName: 'ListBankAccount',
          query: `
            query ListBankAccount {
              listBankAccount {
                id
                uuid
                userId
                bankName
                accountNumber
                routingNumber
                isDeleted
                createdAt
                modifiedAt
              }
            }
          `
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
  
        const bankAccounts = response.body.data?.listBankAccount;

        if (bankAccounts) {
          // Validate the response against the expected data from Task 4
          bankAccounts.forEach((account, index) => {
            expect(account.bankName).to.eq(createBankCredentials2.bankName)
            expect(account.routingNumber).to.eq(createBankCredentials2.routingNubmer)
            expect(account.accountNumber).to.eq(createBankCredentials2.accountNubmer)
          })
        }
      })
    })
  })