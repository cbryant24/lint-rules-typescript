# Eslint, Typescript, and Prettier Setup

Run the following command to install and install peerDependencies as devDependencies for the current project

> npx install-peerdeps --dev @cbryant24/eslint-config-typescript

Create the `tsconfig.json` file in the projects root directory by  running the following command

> tsc --init

Add the follow `extends` option to include base tsconfig.json

```javascript
{
  "extends": "@cbryant24/tsconfig.json",
  "compilerOptions": {
    ...
  }
}
```

Create a `.eslintrc` file in the root of your project's directory (it should live where package.json does). Your `.eslintrc` file should look like this:

```javascript
{
  "extends": [
    "@cbryant24/eslint-config-typescript"
  ]
}
```

Run the following command to create a prettier config file

> touch .prettierrc.json

Add the follow configuration to the `.prettierrc.json` file

```javascript
{
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true
}
```
