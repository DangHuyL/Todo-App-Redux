import { createSlice } from '@reduxjs/toolkit';

export const todoSlide = createSlice({
    name: 'todoList',
    initialState: [
        { id: 1, name: 'Learn Yoga', completed: false, priority: 'Medium' },
        { id: 2, name: 'Learn Reactjs', completed: true, priority: 'Low' },
        { id: 3, name: 'Learn Java', completed: false, priority: 'High' },
    ],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },

        // mutation
        toggleTodoStatus: (state, action) => {
            const currentTodo = state.filter(
                (todo) => todo.id === action.payload,
            );

            currentTodo.completed = !currentTodo.completed;
        },
    },
});
