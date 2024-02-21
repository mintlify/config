module.exports = {
  singleQuote: true,
  printWidth: 100,
  trailingComma: "es5",
  arrowParens: "always",
  tabWidth: 2,
  useTabs: false,
  quoteProps: "as-needed",
  jsxSingleQuote: false,
  bracketSpacing: true,
  bracketSameLine: false,
  plugins: ["@trivago/prettier-plugin-sort-imports"],
  importOrder: ["<THIRD_PARTY_MODULES>", "^@/(.*)$", "^[./]"],
  importOrderSeparation: true,
  "plugins": ["prettier-plugin-tailwindcss"]
};
