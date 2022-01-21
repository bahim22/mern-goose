
# Notes for StoryBook React App

➾➔➤❖$ℬ⊕✓✂︎♑️©❖❝❞[]✬★☒☑︎⇐⥣⇓❮❯🖥💻⏳💡⚒🔑📭📦📨📊📈📜📚📕📙📘✂️🔐🔎♑️❌⭕️🚫✅❎🌐🆗2️⃣0️⃣▶️©️✔️™️☑️🔘🕢é

## Initial SetUp

1. clone or degit repo, cd into app and install dep

```shell
    npm install --global yarn #to update yarn
    npx degit chromaui/intro-storybook-react-template taskbox
    cd <app-name>
    yarn
```

1. if there are security issues run audit and upgrade dep
   1. can pass flags such as
      1. --production[=true|false]
      2. --verbose
   2. yarn add (dep) || yarn add --dev (devDep)
      1. yarn add package-name@tag // @latest @next
   3. yarn run [script] [args] // yarn test -o --watchAll
   4. yarn cache list | ... cache dir |  cache clean | yarn config set cache-folder [path]
   5. yarn install --check-file
   6. yarn import // creates yarn-lock file based on package-lock or w/ info from node_modules dir
   7. yarn info [package] --json # get info on a npm package

```shell
yarn init # create new package.json
yarn install
yarn audit --groups "dependencies devDependencies"
yarn upgrade-interactive --latest
yarn versions #check --v of node, yarn, v8 etc.
yarn remove <pack> --flag
```

## 🔎 What's inside?

   > .
    | Main App
    ├── node_modules
    ├── public
    ├── src
    ├── .env
    ├── .gitignore
    ├── LICENSE
    ├── package.json
    ├── yarn.lock
    └── README.md

1. **`.storybook`**: This directory contains Storybook's [configuration](https://storybook.js.org/docs/react/configure/overview) files.

2. **`public`**: This directory will contain the development and production build of the site.

3. **`src`**: This directory will contain all of the code related to what you will see on your application.

4. **`.env`**: Simple text configuration file for controlling the application's environment constants.

5. **`package.json`**: Standard manifest file for Node.js projects, which typically includes project specific metadata (such as the project's name, the author among other information). It's based on this file that npm will know which packages are necessary to the project.