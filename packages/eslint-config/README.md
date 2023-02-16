# Shared ESLint configuration (base)

[ESLint](https://eslint.org/) is used for code linting.

The inheritance hierarchy looks like this:
```
eslint-config (base)
         ^
eslint-config-typescript
         ^
eslint-config-next
```

To use [`eslint-config-typescript`](../eslint-config-typescript/README.md) or [`eslint-config-next`](../eslint-config-typescript/README.md), visit their respective documentation.

## Add Dependencies
Install this package and peerDependencies of this package as devDependencies in the project, using [install-peerdeps](https://github.com/nathanhleung/install-peerdeps).

```sh
npx install-peerdeps --dev @mintlify/eslint-config
```

Alternatively, you can install this package as devDependency and install the peerDependencies separately.
```sh
# yarn
yarn add -D @mintlify/eslint-config

# npm
npm i -D @mintlify/eslint-config

# pnpm
pnpm add -D @mintlify/eslint-config
```

## Add Configuration File
Create a `.eslintrc.json` file in the project root that extends

```
{
    "extends": "@mintlify/eslint-config",
    ...
}
```
