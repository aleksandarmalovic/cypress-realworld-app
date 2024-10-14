const { defineConfig } = require('cypress')

module.exports = defineConfig({
    e2e: {
      baseUrl: 'http://localhost:3000'
    },

    env: {

      apiUrl: 'http://localhost:3001',
    
      test_user :{
        firstname: 'fn_test204',
        lastname: 'lm_test204',
        username: 'un_test204',
        password: 'pw_test204',
        confirmpassword: 'pw_test204'
      },

      createBankCredentials :{
        bankName: 'test202bankaccname',
        routingNubmer: 'test202rn',
        accountNubmer: 'test202an'
      }
    }    
})

