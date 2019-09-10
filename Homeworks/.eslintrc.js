module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: 'airbnb-base',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': 'off'
  }
};
