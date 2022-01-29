
# Front-End React

## Create React App Scripts

`npm start`: Runs the app in the development mode.\
`npm test`: Launches the test runner in the interactive watch mode.
`npm run build`: Builds the app for production to the `build` folder.\
`npm run eject`: copy config files and the transitive dependencies (webpack, Babel, ESLint, etc) into your proj

## FETypeScript

- _src/type.d.ts_ holds the types
  - ext .d.ts allows types to be global, removing need for importing them
- create the `todo type`
  - the FE `interface` needs to match the structure of the API data + add'l props for equaling the defined API types
  - the `TodoProps` are = type of the app handling data rendering
- _axios response_ implemented to req info from API
  - `getTodos`() func calls the server to get the data and returns a promise
    - Type = AxiosResponse which is the Todos that will match type = ApiDataType
  - `addtodo`: a user inputs data (argument) then the func responds with a promise (return)
  - Mdb also able to auto create _id prop so we can remove it.
  - `updateTodo`
    - pass in the updated data and the _id of the object & change status
  - `deleteTodo`
    - receives _id param to return promise
- `components`: todo form and display
  - AddTodo = React func compo that recieves the saveTodo() method as a prop, enabling storing data to the db
  - The ITodo type is matched by the formData state and in order for it to accept the initial state of the empty object (no todos) an alternative type ({}) is added
  - To correctly handle props received by the compo we extend TodoProps type then append the updatetodo & deleteTodo funcs
  - the todo object will be passed in enabling it to be displayed and add funcs to update & delete a Todo
- `Fetch` & `Display` data
