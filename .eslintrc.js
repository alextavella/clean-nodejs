module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'standard-with-typescript',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/comma-spacing': 'off',
    '@typescript-eslint/return-await': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-namespace': 'off',
    'import/export': 'off',
  },
}
