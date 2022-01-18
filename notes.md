
# Notes for TS todo App

## config

1. create root dir and project dir
2. start the nodejs app via yarn init
3. create tsconfig.json file
   1. `outDir`: tells the compiler to put the compiled code into the dist/js folder.
   2. `target`: it specifies the ECMAScript target version when compiling the TypeScript code. Here, we target es5 to support all browsers, you can change it to ES6, ES3(it's the default if no target is specified), ES2020, etc.
   3. `module`: it defines the module of the compiled code. The module can be Common JS, ES2015, ES2020, etc.
   4. `rootDir`: informs TypeScript to compile every .ts file located in the src folder.
   5. `include`: tells the compiler to include files that are in the src directory and sub-directory.
   6. `exclude`: will exclude the files or folders passed in the array during compile-time.
4. install ts and dep (local or -g )

```bash
yarn add typescript
yarn add express cors mongoose
yarn add -D @types/node @types/express @types/mongoose @types/cors
yarn add -D concurrently nodemon
```

- example TS types, interfaces

```ts
let foo: string = "test" //explicit type define
 let foo = "test" //or implicit
let baz: string[] = ["This", "is", "a", "Test"] //same code as below
 let baz: Array<string> = ["This", "is", "a", "Test"].
```

- `Interfaces` and Type aliases help to define the shape of an object-like data structures.

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

## packages

## dir
