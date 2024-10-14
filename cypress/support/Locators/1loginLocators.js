const signupLocators = {
    firstName: '[data-test="signup-first-name"]',
    lastName: '[data-test="signup-last-name"]',
    username: '[data-test="signup-username"]',
    password: '[data-test="signup-password"]',
    confirmPassword: '[data-test="signup-confirmPassword"]',
    signupButton: '[data-test="signup-submit"]',
    signInRedirectionBtn: '[href="/signin"]'
  };

const signinLocators = {
    username: '[data-test="signin-username"]',
    password: '[data-test="signin-password"]',
    signinButton: '[data-test="signin-submit"]',
    rememberMeCheck: '[data-test="signin-remember-me"]',
    signUpRedirectionBtn: '[href="/signup"]'
  }; 

  export {signupLocators, signinLocators}