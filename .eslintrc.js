module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    "prettier/prettier": [
      1,
      {
        trailingComma: "es5",
        singleQuote: true,
        semi: true,
      },
    ],
    "no-console": 0,
  },
};
