# Shared ESLint configuration (typescript)

[ESLint](https://eslint.org/) is used for code linting.

## Add Dependencies
Install this package and peerDependencies of this package as devDependencies in the project, using [install-peerdeps](https://github.com/nathanhleung/install-peerdeps).

```sh
npx install-peerdeps --dev @mintlify/eslint-config-typescript
```

Alternatively, you can install this package as devDependency and install the peerDependencies separately.
```sh
# yarn
yarn add -D @mintlify/eslint-config-typescript

# npm
npm i -D @mintlify/eslint-config-typescript

# pnpm
pnpm add -D @mintlify/eslint-config-typescript
```

## Add Configuration File
Create a `.eslintrc.json` file in the project root that extends

```
{
    "extends": "@mintlify/eslint-config-typescript",
    ...
}
```
