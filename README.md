# Pursuit-Core-Web-Redux-Lab-Two

## App
![ReduxToDos](./ReduxToDos.gif)


### Specification
Build a todo app using Redux. This app does not require a Back-end to persist the data the redux store is enough for now. 

A user should be able to:
- Create a ToDo
- Toggle a ToDo between completed and uncompleted
  - Clicking a non-completed ToDo should mark it as completed. Display the ToDo crossed out when completed.
  - Clicking a completed ToDo should mark is active(not completed). Remove the crossing out.
- Filter by active(non-completed), completed, or all ToDos.

## Todo
A todo object should have the following properties.
```js
{
  id: 1,
  text: "Buy groceries",
  completed: true // or false
}
```

## State
Your state to store this information would look like:
```js
{
  todos: [],
  visibilityFilter: "all" // One of "all", "completed" or "active"
}
```

* `todos` keeps todo objects. 
* When the user click's the button Completed you will set the `visibilityFilter` and filter `todos` for only todos that are completed and display those completed todos.
* When the user click's the button Active you will filter `todos` for only todos that are **not** completed and display those non-completed todos to the user.

## Actions
Here are some suggestions for your actions and action types. You can, of course, come up with your own:
* `ADD_TODO`

```js
{
  type: 'ADD_TODO',
  payload: {
    text: 'Do something.'  
  }
}
```

* `TOGGLE_TODO`
* `SET_VISIBILITY_FILTER` 


## Resources
* Follow this [React-Redux Basic Tutorial](https://react-redux.js.org/introduction/basic-tutorial). 
* [Redux Basics Tutorial](https://redux.js.org/basics/basic-tutorial)
>These literally solve the lab.
