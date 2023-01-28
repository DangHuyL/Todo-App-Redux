export const addTodo = (data) => {
    return {
        type: 'todoList/AddTodo',
        payload: data,
    };
};

export const toggleTodoStatus = (todoId) => {
    return {
        type: 'todoList/toggleTodoStatus',
        payload: todoId,
    };
};

export const SearchFilter = (data) => {
    return {
        type: 'filters/searchFilters',
        payload: data,
    };
};

export const statusFilter = (data) => {
    return {
        type: 'filters/statusFilter',
        payload: data,
    };
};

export const PriorityFilter = (data) => {
    return {
        type: 'filters/priorityFilters',
        payload: data,
    };
};
