import { ADD_TODO, DELETE_TODO, COMPLETE_TODO } from './actionTypes';

export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export const deleteTodo = (todoId) => {
    return {
        type: DELETE_TODO,
        payload: todoId
    }
}

export const completeTodo = (todoId) => {
    return {
        type: COMPLETE_TODO,
        payload: todoId
    }
}