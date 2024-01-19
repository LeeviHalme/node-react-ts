# node-react-ts

Node.js, React (Vite), TypeScript, Yarn Workspaces Monorepo Template

## Getting Started

[Generate a new project](https://github.com/LeeviHalme/node-react-ts/generate) from this template, clone it, install project dependencies, and start hacking: :sunglasses:

```bash
git clone git@github.com:LeeviHalme/node-react-ts.git
cd node-react-ts
yarn install
```

## Available Scripts

Below are the available scripts for this project.

### apps/client

- `yarn dev` - Starts the Vite development server
- `yarn build` - Builds the project for production
- `yarn preview` - Serves the production build
- `yarn lint` - Lints the project using ESLint

### apps/server

- `yarn dev` - Starts the Nodemon watcher for `src/index.ts`
- `yarn build` - Builds the project for production
- `yarn start` - Starts the production builds
- `yarn lint` - Lints the project using ESLint

**You can also access these scripts from the project root, by running:** `yarn workspace <workspaceName> <scriptName>`.
