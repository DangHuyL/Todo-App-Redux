import { configureStore } from '@reduxjs/toolkit';

import { todoSlide } from '../Component/TodoList/TodoListSlide';
import { filterSLide } from '../Component/Filter/FilterSlide';

const Store = configureStore({
    reducer: {
        todoList: todoSlide.reducer,
        filters: filterSLide.reducer,
    },
});

export default Store;
