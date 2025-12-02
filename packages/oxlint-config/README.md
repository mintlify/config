# @mintlify/oxlint-config

Mintlify's Oxlint configuration, ported from the existing ESLint configurations.

## Installation

```bash
npm install --save-dev @mintlify/oxlint-config
```

## Usage

For a TypeScript project, create an `oxlintrc.json` in your project root:

```json
{
  "extends": "@mintlify/oxlint-config"
}
```

For Next.js projects, extend the Next-specific config:

```json
{
  "extends": "@mintlify/oxlint-config/next"
}
```

Or reference the config directly when running oxlint:

```bash
oxlint -c node_modules/@mintlify/oxlint-config/oxlintrc.json
```

## Rules Included

- `oxlintrc.json` matches the shared TypeScript lint rules from `@mintlify/eslint-config-typescript`, including the TypeScript and Import plugins.
- `next.json` builds on the TypeScript config to add React, JSX A11y, and Next.js plugin support, mirroring `@mintlify/eslint-config-next`.
