module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 0,
    'react/jsx-key': 1,
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'react/state-in-constructor': 0,
    'react/static-property-placement': 0,
    'react/destructuring-assignment': [1, 'always'],
    'react/jsx-filename-extension': 'off',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks deps of Hooks
    'react/require-default-props': 0,
    'react/jsx-fragments': [1, 'syntax'],
    'react/jsx-wrap-multilines': 0,
    'react/forbid-prop-types': 0,
    'react/sort-comp': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-closing-bracket-location': 2,
    'react/jsx-indent': [
      2,
      2,
      {
        checkAttributes: true,
        indentLogicalExpressions: true
      }
    ],
    'react/jsx-indent-props': [2, 2],
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true
      }
    ],
    'react/jsx-tag-spacing': [
      2,
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never'
      }
    ],
    'react/jsx-closing-tag-location': [2],
    '@next/next/no-img-element': 0,
    'jsx-a11y/alt-text': 0,
    'react/no-unescaped-entities': 0,
    'react/no-array-index-key': 0
  }
}
