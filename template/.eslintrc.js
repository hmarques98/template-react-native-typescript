module.exports = {
  root: true,
  extends: [
    'plugin:jest/recommended',
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react

    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin

    'prettier/@typescript-eslint',
  ],
  plugins: [
    'jest',
    'detox',
    '@typescript-eslint',
    'react-native',
    'eslint-plugin-react-hooks',
  ],

  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    'curly': 'off',
    'react/prop-types': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/prefer-interface': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'react/display-name': 0,
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  env: {
    jest: true,
  },
};
