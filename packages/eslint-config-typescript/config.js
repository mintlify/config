module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import"],
  extends: ["@mintlify/eslint-config", "plugin:@typescript-eslint/recommended"],
  rules: {
    "import/no-anonymous-default-export": "warn",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-empty-function": "off", // this rule causes eslint to crash, see: https://stackoverflow.com/a/76511985/20170974
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/no-unnecessary-condition": "error",
    "@typescript-eslint/no-for-in-array": "error",
  },
};
