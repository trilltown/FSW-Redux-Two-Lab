import React from 'react'
import { connect } from 'react-redux';
import { ADD_TODO } from '../store/actionTypes'

class TodoForm extends React.Component {
  state = {
    todoText: ''
  }

  handleTodoText = (e) => {
    this.setState({
      todoText: e.target.value
    })
  }

  addNewTodo = (e) => {
    e.preventDefault();
    const { todoText } = this.state
    this.props.addTodo(todoText)
    this.setState({
      todoText: ''
    })
  }

  render() {
    const { todoText } = this.state;
    return (
      <form onSubmit={this.addNewTodo}>
        <input
          type="text"
          name="todoText"
          onChange={this.handleTodoText}
          value={todoText}
        />
        <input type="submit" value="Add" />
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text) => dispatch({
      type: ADD_TODO,
      payload: text
    })
  }
}

export default connect(null, mapDispatchToProps)(TodoForm); 
