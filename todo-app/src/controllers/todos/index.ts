import {ITodo} from './../../types/todo'
import { Response, Request } from 'express'
// used to explicitly type values
import Todo from '../../models/todo';

const getTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    const todos: ITodo[] = await Todo.find()
    res.status(200).json({ todos })
  } catch (error) {
    throw error
  }
};
// func getTodos() fetches data (gets req & res parameter then returns a promise)

const addTodo =async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<ITodo, "name" | "description" | "status">

    const todo: ITodo = new Todo({
      name: body.name,
      description: body.description,
      status: body.status,
    })

    const newTodo: ITodo = await todo.save()
    const allTodos: ITodo[] = await Todo.find()

    res
      .status(201)
      .json({ message: "Todo added", todo: newTodo, todos: allTodos})
    } catch (error) {
      throw error
    }
};

// this func gets the body obj that has the user data that was input
//typecasting used so body var matches Itodo func; then using the prototype todo model to create a new todo, allowing the Todo to be placed in the db and elicit a response of the new todo item and updated todo arr

const updateTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req
    const updateTodo: ITodo | null = await Todo.findByIdAndUpdate(
      { _id: id },
      body
    )
    const allTodos: ITodo[] = await Todo.find()
    res.status(200).json({
      message: "Todo updated",
      todo: updateTodo,
      todos: allTodos,
    })
  } catch (error) {
    throw error
  }
}

const deleteTodo = async ( req: Request, res: Response): Promise<void> => {
  try {
    const deletedTodo: ITodo | null = await Todo.findByIdAndRemove(
      req.params.id
    )
    const allTodos: ITodo[] = await Todo.find()
    res.status(200).json({
      message: 'Todo deleted',
      todo: deletedTodo,
      todos: allTodos,
    })
  } catch (error) {
    throw error
  }
}

export { getTodos, addTodo, updateTodo, deleteTodo}

/*extract id from req, used as arg in findByIdAndRemove(), which finds that specific todo in the DB and deletes*/
// todo model to get Mongo data, then return res w/ array of todos
