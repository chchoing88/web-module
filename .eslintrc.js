const commonRules = require('eslint-rules');

const OFF = 0, WARN = 1, ERROR = 2;

const globals = Object.assign({}, commonRules.globals, {
  smartLog: true,
  AmCharts: true,
  daum: true,
  SL: true
});

const rules = Object.assign({}, commonRules.rules, {
  'func-style': [WARN, 'declaration', { allowArrowFunctions: true }],
  'no-magic-numbers': [OFF],
  'no-multi-spaces': [
    ERROR,
    {
      exceptions: {
        VariableDeclarator: true,
        ImportDeclaration: true,
        AssignmentExpression: true
      }
    }
  ],
  'no-console': ['warn', {
    allow: ['error']
  }],
  "indent": [ERROR, 2, { 'SwitchCase': 1 }],
  "jsx-quotes": [ERROR, "prefer-double"],
  "guard-for-in": WARN,
  "eqeqeq": [WARN, 'always', { 'null': 'ignore' }],
});

module.exports = {
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    }
  },
  plugins: [
    // "react"
  ],
  settings: {
    react: {
      pragma: 'h'
    }
  },
  env: {
    browser: true,
    node: true,
    jquery: true,
    commonjs: true,
    es6: true
  },
  globals,
  rules
};