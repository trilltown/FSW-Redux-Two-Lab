import React from 'react';
import './App.css';
import TodoInput from './components/toDoInput';
import TodoList from './components/toDoList';

function App() {
  return (
    <div className="App">
      Hello World
    <TodoInput/>
    <TodoList/>
    </div>
  );
}

export default App;
