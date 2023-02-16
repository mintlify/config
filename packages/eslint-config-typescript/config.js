module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: "@mintlify/eslint-config",
  rules: {
    "@typescript-eslint/no-unused-vars": "off",
  },
};
