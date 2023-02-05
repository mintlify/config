# Shared TS configuration

A [TS Config file](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) is used to specify how a TypeScript project should be compiled.

## Add Dependencies
Install this package and peerDependencies of this package as devDependencies in the project, using [install-peerdeps](https://github.com/nathanhleung/install-peerdeps).

```sh
npx install-peerdeps --dev @mintlify/ts-config
```

Alternatively, you can install this package as devDependency and install the peerDependencies separately.
```sh
# yarn
yarn add -D @mintlify/ts-config

# npm
npm i -D @mintlify/ts-config

# pnpm
pnpm add -D @mintlify/ts-config
```

## Add Configuration File
In the project's `tsconfig.json` file, extend this configuration:

```json
{
  "extends": "@mintlify/ts-config",
  "compilerOptions": {
    ...
  },
  ...
}
```