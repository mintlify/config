module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: ["@mintlify/eslint-config", "plugin:@typescript-eslint/recommended"],
  rules: {
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-empty-function": "off", // this rule causes eslint to crash, see: https://stackoverflow.com/a/76511985/20170974
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/no-unnecessary-condition": "error",
  },
};
