# next_boilerplate

## Architecture Overview

```
src
├── components
│   ├── Atoms                (common component)
│   ├── Molecules            ()
│   ├── Organisms            (complex component - combined from Atoms, Molecules and UI library's component)
│   └── Templates            (UI page)
├── constants                (defined constants)
├── enums                    (defined enums)
├── hoc                      (custom common High-order Component)
├── hooks                    (custom common hooks)
├── interface                (defined interface using for service and sagas)
├── icons                    (custom svg - icon component)
├── pages                    (container page and router)
├── services                 (config base instance connect to server)
├── store                    (redux saga config)
│   ├── actions              (actions type and function)
│   ├── reducers             (reducers config)
│   ├── sagas                (saga generator function *)
│   └── index.tsx            (redux saga configuration)
├── styles                   (defined css/scss)
└── utilities                (common function)
```

## Meaning of commit prefixes
- build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- ci: Changes to our CI configuration files and scripts (example scopes: Gitlab CI, Circle, BrowserStack, SauceLabs)
- chore: add something without touching production code (Eg: update npm dependencies)
- docs: Documentation only changes
- feat: A new feature
- fix: A bug fix
- perf: A code change that improves performance
- refactor: A code change that neither fixes a bug nor adds a feature
- revert: Reverts a previous commit
- style: Changes that do not affect the meaning of the code (Eg: adding white-space, formatting, missing semi-colons, etc)
- test: Adding missing tests or correcting existing tests

## Convention

- Using common git flow when checkout, create branch, commit and create merge request
- Remember change status task in backlog when coding, create merge request and resolved task
- Always checking lint and prettier format before commit code
- Fetching and rebasing code before commit and create merge request
- Using pattern Presentation and Container component while coding


## Get start

#### Technologies

- NextJS
- Typescript
- Redux Saga
- Lodash

#### Required

- Node >= 18

#### Install dependencies

```
npm install / yarn install
```

#### Create .env file

```
cp .example.env .env
```

#### Run dev server

```
npm run dev / yarn dev
```

#### Open in web browser

```
http://localhost:8080/
```

#### Build

```
npm run build / yarn build
```

#### Docker build production
```
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```