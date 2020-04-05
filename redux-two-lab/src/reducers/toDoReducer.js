import React from 'react';

const initialState = {
    todos: [
        {
            id: 1,
            text: "Buy groceries",
            completed: true
        },
        {
            id: 2,
            text: "Do Laundry",
            completed: false
        }
    ]
};

const toDoReducer = (state = initialState, action) => {
    Object.freeze(state);
    const newState = { ...state };
    switch (action.type) {
        
    }
}