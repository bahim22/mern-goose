/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck

import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/AddTodo'
import AddTodo from './components/TodoItem'
import { addTodo, getTodos, deleteTodo, updateTodo } from './API'
import Todo from './components/TodoItem';


const App: React.FC = () => {



  return (
    <main className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> My Todos </h1>
        <AddTodo saveToDo={handleSaveTodo}  />
        {todos.map((todo: ITodo) => (
          <TodoItem
            key={todo._id}
            updateTodo={handleUpdateTodo}
            deleteTodo={handleDeleteTodo}
            todo={todo} />
            ))}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </main>
  );
}

export default App;
