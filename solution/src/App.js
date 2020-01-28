import React from 'react';
import './App.css';
import TodoForm from './Components/TodoForm';
import Todos from './Components/Todos';
import TodosVisibilityButtons from './Components/TodosVisibilityButtons';

function App() {
  return (
    <div className="App">
      <TodoForm />
      <Todos />
      <TodosVisibilityButtons />
    </div>
  );
}

export default App;
