
# Front-End React

## Create React App Scripts

`npm start`: Runs the app in the development mode.\
`npm test`: Launches the test runner in the interactive watch mode.
`npm run build`: Builds the app for production to the `build` folder.\
`npm run eject`: copy config files and the transitive dependencies (webpack, Babel, ESLint, etc) into your proj

## FETypeScript

- _src/type.d.ts_ holds the types
  - ext .d.ts allows types to be global, removing need for importing them
- create the todo type
  - the FE `interface` needs to match the structure of the API data + add'l props for equaling the defined API types
  - the `TodoProps` are = type of the app handling data rendering
- implement axios response to req info from API
  - `getTodos`() func calls the server to get the data and returns an AxiosResponse type promise which is the Todos that will have to = ApiDataType type
  - a user inputs data (argument) then the `addtodo` func responds with a promise (return)
  - Mdb also able to auto create _id prop so we can remove it.
  - `updateTodo`
  - `deleteTodo`
- _components_ for UI
  - todo form and displaying todo items
