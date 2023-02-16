# Shared ESLint configuration (next)

[ESLint](https://eslint.org/) is used for code linting.

## Add Dependencies
Install this package and peerDependencies of this package as devDependencies in the project, using [install-peerdeps](https://github.com/nathanhleung/install-peerdeps).

```sh
npx install-peerdeps --dev @mintlify/eslint-config-next
```

Alternatively, you can install this package as devDependency and install the peerDependencies separately.
```sh
# yarn
yarn add -D @mintlify/eslint-config-next

# npm
npm i -D @mintlify/eslint-config-next

# pnpm
pnpm add -D @mintlify/eslint-config-next
```

## Add Configuration File
Create a `.eslintrc.json` file in the project root that extends this package.

```
{
    "extends": "@mintlify/eslint-config-next",
    ...
}
```
