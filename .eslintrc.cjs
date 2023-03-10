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
      parser: 'astro-eslint-parser',
      rules: {
        'astro/no-set-html-directive': 'error'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'no-unused-vars': 'warn',
    'space-before-function-paren': 'off',
    'no-tabs': 'off',
    'jsx-quotes': ['warn', 'prefer-single'],
    'eol-last': 'off'
  }
}
