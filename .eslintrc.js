module.exports = {
  extends: ['alloy', 'alloy/react', 'alloy/typescript'],
  env: {
    // Your environments (which contains several predefined global variables)
    //
    // browser: true,
    // mocha: true,
    // jquery: true
  },
  globals: {
    // Your global variables (setting to false means it's not allowed to be reassigned)
    //
    // myGlobal: false
  },
  rules: {
    // Customize your rules
    'no-undef': 'off',
    'prefer-arrow-callback': 'off',
    '@typescript-eslint/no-invalid-this': 'off',
    '@typescript-eslint/no-require-imports': 'off',
    '@typescript-eslint/method-signature-style': 'off',
  },
};
