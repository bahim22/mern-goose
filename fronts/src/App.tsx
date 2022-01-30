import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/AddTodo'
import AddTodo from './components/TodoItem'
import { addTodo, getTodos, deleteTodo, updateTodo } from './API'


const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    fetchTodos()
  }, [])

  const fetchTodos = (): void => {
    getTodos()
    .then(({ data: { todos } }: ITodo[] | any) => setTodos(todos))
    .catch((err: Error) => console.log(err))
  }

  const handleSaveTodo = (e: React.FormEvent, formData: ITodo): void => {
    e.preventDefault()
    addTodo(formData)
    .then(({ status, data }) => {
      if (status !== 201) {
        throw new Error('Error! Todo was not saved')
      }
      setTodos(data.todos)
    })
    .catch((err) => console.log(err))
  }

  const handleUpdateTodo = (todo: ITodo): void => {
    updateTodo(todo)
    .then(({ status, data }) => {
      if (status !== 200) {
        throw new Error('Error! Todo not updated.')
      }
      setTodos(data.todos)
    })
    .catch((err) => console.log(err))
  }

  const handleDeleteTodo = (_id: string): void => {
    deleteTodo(_id)
    .then(({ status, data }) => {
      if (status !== 200) {
        throw new Error('Error! Todo not deleted.')
      }
      setTodos(data.todos)
    })
    .catch((err) => console.log(err))
  }

  return (
    <main className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://github.com/bahim22"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vist my GitHub for more Apps
        </a>
      </header>
        <h1> My Todos </h1>
        <AddTodo saveTodo={handleSaveTodo}  />
        {todos.map((todo: ITodo) => (
          <TodoItem
            key={todo._id}
            updateTodo={handleUpdateTodo}
            deleteTodo={handleDeleteTodo}
            todo={todo}
          />
        ))}
    </main>
  );
}

export default App;
