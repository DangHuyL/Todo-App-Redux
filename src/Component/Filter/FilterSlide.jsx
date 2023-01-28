import { createSlice } from '@reduxjs/toolkit';

export const filterSLide = createSlice({
    name: 'filters',
    initialState: {
        search: '',
        status: 'All',
        priority: [],
    },
    reducers: {
        searchFilter: (state, action) => {
            state.search = action.payload;
        },
        statusFilter: (state, action) => {
            state.status = action.payload;
        },
        priorityFilter: (state, action) => {
            state.priority = action.payload;
        },
    },
});
