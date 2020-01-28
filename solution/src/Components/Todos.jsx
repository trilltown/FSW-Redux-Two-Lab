import React from 'react'
import { connect } from 'react-redux';
import { TOGGLE_TODO } from '../store/actionTypes';

const Todos = (props) => {
  console.log('Todos re-rendering. Props', props)
  const { todos, toggleTodo, visibilityFilter } = props

  let todosToDisplay = todos

  if (visibilityFilter === 'completed') {
    todosToDisplay = todosToDisplay.filter(todo => todo.completed)
  } else if (visibilityFilter === 'active') {
    todosToDisplay = todosToDisplay.filter(todo => !todo.completed)
  }

  return (
    <ul>{
      todosToDisplay.map(todo => {
        return (
          <li
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >{todo.text} </li>
        )
      })
    }</ul>
  )
}

const mapStateToProps = (state) => {
  console.log('Todos mapStateToProps')
  return {
    todos: state.todos,
    visibilityFilter: state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    toggleTodo: (id) => {
      dispatch({
        type: TOGGLE_TODO,
        payload: id
      })
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos)
