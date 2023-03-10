module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser'
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'no-unused-vars': 'warn',
    'space-before-function-paren': 'off',
    'no-tabs': 'off',
    'jsx-quotes': ['warn', 'prefer-single'],
    'eol-last': 'off'
  }
}
