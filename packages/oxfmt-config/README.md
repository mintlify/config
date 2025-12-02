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
