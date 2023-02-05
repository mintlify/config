# Shared Prettier configuration

[Prettier](https://prettier.io/) is used for code formatting.

## Add Dependencies
Install this package and peerDependencies of this package as devDependencies in the project, using [install-peerdeps](https://github.com/nathanhleung/install-peerdeps).

```sh
npx install-peerdeps --dev @mintlify/prettier-config
```

Alternatively, you can install this package as devDependency and install the peerDependencies separately.
```sh
# yarn
yarn add -D @mintlify/prettier-config

# npm
npm i -D @mintlify/prettier-config

# pnpm
pnpm add -D @mintlify/prettier-config
```

## Add Configuration File
Create a `.prettierrc` file in the project root with the following content:

```sh
"@mintlify/prettier-config/config.js"
```

## Add Formatting Scripts
Add the following `package.json` scripts (with the appropriate file extensions for the project):

```json
"scripts": {
    "format": "prettier \"**/*.{css,js,ts,tsx,md,mdx}\" --write",
    "format:check": "prettier \"**/*.{css,js,ts,tsx,md,mdx}\" --check",
    ...
}
```