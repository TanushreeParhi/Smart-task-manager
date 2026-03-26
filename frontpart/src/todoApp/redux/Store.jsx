import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './TodoSlice.jsx';
export const store = configureStore({
    reducer:{
        todo: todoReducer,
    },
});