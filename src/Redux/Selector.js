import { createSelector } from '@reduxjs/toolkit';

// Selector dùng để lấy các Reducer trong Store
const todoListSelector = (state) => state.todoList;
const searchTextSelector = (state) => state.filters.search;
const statusCheckedSelector = (state) => state.filters.status;
const prioritySelector = (state) => state.filters.priority;

export const todosRemainingSelector = createSelector(
    // Truyền selector ở trên vào method createSelector
    todoListSelector,
    searchTextSelector,
    statusCheckedSelector,
    prioritySelector,
    (todoList, searchText, statusChecked, priorities) => {
        // eslint-disable-next-line array-callback-return
        return todoList.filter((todo) => {
            if (statusChecked === 'All') {
                return priorities.length
                    ? todo.name.includes(searchText) &&
                          priorities.includes(todo.priority)
                    : todo.name.includes(searchText);
            } else {
                return (
                    todo.name.includes(searchText) &&
                    (statusChecked === 'Completed'
                        ? todo.completed
                        : !todo.completed) &&
                    (priorities.length
                        ? priorities.includes(todo.priority)
                        : true)
                );
            }
        });
    },
);
