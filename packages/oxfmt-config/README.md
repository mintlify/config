# @mintlify/oxfmt-config

Mintlify's Oxfmt configuration, ported from the existing Prettier configuration.

## Installation

```bash
npm install --save-dev @mintlify/oxfmt-config
```

## Usage

Create an `oxfmtrc.json` in your project root:

```json
{
  "extends": "@mintlify/oxfmt-config"
}
```

Or reference the config directly when running oxfmt:

```bash
oxfmt -c node_modules/@mintlify/oxfmt-config/oxfmtrc.json
```

## Settings

This configuration matches the Prettier settings:
- 2 space indentation
- 100 character line width
- Single quotes
- ES5 trailing commas
- Arrow function parens always
- Bracket spacing enabled
- Import sorting enabled with groups for `@mintlify`, other third-party (`@?\\w`), `@/` aliases, then relative paths (mirrors `@trivago/prettier-plugin-sort-imports`)

> Tailwind class sorting from `prettier-plugin-tailwindcss` is not available in Oxfmt yet; if it ships in Oxfmt we can add it here for full parity.
