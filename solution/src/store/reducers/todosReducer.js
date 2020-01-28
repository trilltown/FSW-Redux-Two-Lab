import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from '../actionTypes';

const filters = {
  all: 'all',
  completed: 'completed',
  active: 'active'
}

const initialState = {
  nextTodoId: 1,
  todos: [],
  visibilityFilter: filters.all
}

const todosReducer = (state = initialState, action) => {
  const newState = { ...state }

  switch (action.type) {
    case ADD_TODO:
      const todo = {
        id: newState.nextTodoId,
        text: action.payload,
        completed: false
      }

      newState.todos = [...newState.todos, todo]
      newState.nextTodoId++
      break;

    case TOGGLE_TODO:
      const id = action.payload
      newState.todos = newState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
      break;

    case SET_VISIBILITY_FILTER:
      newState.visibilityFilter = action.payload
      break;

    default:
      break;
  }

  return newState;
}

export default todosReducer;
