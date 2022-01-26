
# Dionysus Era Development

[dionysus-era-logo](react-todo/todo-app/public/logo.png)
[dionysus-era-logo](react-todo/todo-app/public/img/android-chrome-512x512.png)

## react-fullstack TS todo App

tags: [ 'react', 'express', 'mongoDb', 'yarn', 'typescript']

## Notes

## Project setup, config and packages

1. create root dir and project dir
2. start the nodejs app via yarn init
3. create tsconfig.json file
   1. `outDir`: tells the compiler to put the compiled code into the dist/js folder.
   2. `target`: it specifies the ECMAScript target version when compiling the TypeScript code.
      1. Here, we target es5 to support all browsers, you can change it to ES6, ES3(it's the default if no target is specified), ES2020, etc.
   3. `module`: it defines the module of the compiled code. The module can be Common JS, ES2015, ES2020, etc.
   4. `rootDir`: informs TypeScript to compile every .ts file located in the src folder.
   5. `include`: tells the compiler to include files that are in the src directory and sub-directory.
   6. `exclude`: will exclude the files or folders passed in the array during compile-time.
4. install ts and dep (local or -g )
   1. express, mongoDB (mongoose), cors and their types as devDep for TS compiler
   2. install dep so we can compile the ts and for starting server concurrently
5. add build and start values to script key in package.json

```bash
yarn add typescript
yarn add express cors mongoose
yarn add -D @types/node @types/express @types/mongoose @types/cors
yarn add -D concurrently nodemon
```

- Example TS types, interfaces

```ts
let foo: string = "test" //explicit type define
 let foo = "test" //or implicit
let baz: string[] = ["This", "is", "a", "Test"] //same code as below
 let baz: Array<string> = ["This", "is", "a", "Test"].
```

- `Interfaces` and `Type` aliases help to define the shape of an object-like data structures.

```ts
interface ITest {
  id: number;
  name?: string;
}

type TestType = {
  id: number,
  name?: string,
}

function myTest(args: ITest): string {
  if (args.name) {
    return `Hello ${args.name}`
  }
  return "Hello Word"
}

myTest({ id: 1 })
```

## Back-end steps

- create a type (interface)
- create a model
  - imp the interface and util from mongoose (defines the schema and passes the interface as a type to model)
- create API controller (get, add, update, delete info)
  - create a func to fetch data (in controller/app/index.ts)
  - the model gets data from db and returns res (array of todos)
  - create api routes
  - create server and get keys from MongoDB Atlas by making a cluster

## Front-end steps

- make the client side app with React
  - todo type
  - fetch data
  - create components
  - add forms
  - display todo items
  - fetch/display data

## Build for Production

- Test
- Debug
- Deploy

## Style

Built by reading code for hours, daily, following several tutorials and drinking coffee

> [freecodecamp.com][https://www.freecodecamp.org/news/how-to-build-a-todo-app-with-react-typescript-nodejs-and-mongodb/#setting-up]

![dionysus-era-banner](todo-app/public/logo.png)
