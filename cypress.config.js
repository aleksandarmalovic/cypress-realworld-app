const { defineConfig } = require('cypress')

module.exports = defineConfig({
    e2e: {
      baseUrl: 'http://localhost:3000',
    },

    env: {
      test_user :{
        firstname: 'aleksandar',
        lastname: 'malovic',
        username: 'test123',
        password: 'proba123',
        confirmpassword: 'proba123'
      }
    }
})

