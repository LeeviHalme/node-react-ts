# node-react-ts

Node.js, React (Vite), TypeScript, ESLint, Yarn Workspaces Monorepo Template. It contains a React application built with Vite and a minimal Node.js app skeleton. Both apps are 100% TypeScript and use a [custom ESLint config](#eslint).

## Getting Started

[Generate a new project](https://github.com/LeeviHalme/node-react-ts/generate) from this template, clone it, install project dependencies, and start hacking: :sunglasses:

```bash
git clone git@github.com:LeeviHalme/node-react-ts.git
cd node-react-ts
yarn install
```

## Available Scripts

Below are the available scripts for this project:

### apps/client

- `yarn dev` - Starts the Vite development server
- `yarn build` - Builds the app for production
- `yarn preview` - Serves the production build
- `yarn lint` - Lints the app using ESLint

### apps/server

- `yarn dev` - Starts the Nodemon watcher for `src/index.ts`
- `yarn build` - Builds the app for production
- `yarn start` - Starts the production builds
- `yarn lint` - Lints the app using ESLint

**You can also access these scripts from the project root, by running:** `yarn workspace <workspaceName> <scriptName>`.

## ESLint

Both apps are configured to lint using the [Airbnb's JavaScript Style Guide](https://github.com/airbnb/javascript) in addition to [Prettier](https://prettier.io/docs/en/). There are also these custom rules for my personal preference:

- `quotes: ["error", "double"]` - Enforces double quotes.
- `react/jsx-filename-extension: [1, { "extensions": [".tsx"] }]` - Allows the use of `.tsx` file extension
- `react/function-component-definition: ["error", { "namedComponents": "arrow-function" }]` - Enforces arrow functions on functional component declarations
