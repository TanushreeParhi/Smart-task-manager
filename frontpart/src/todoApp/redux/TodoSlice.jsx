import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  filtered: [],
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.list = [...state.list, action.payload];
    },
    removeTodo: (state, action) => {
      state.list = state.list.filter((task) => task.id !== action.payload);
    },
    editTodo: (state, action) => {
      const { id, newText } = action.payload;
      const todo = state.list.find((todo) => todo.id === id);
      if (todo) {
        todo.task = newText;
      }
    },
    toggleTodo: (state, action) => {
      const todo = state.list.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    searchTodo: (state, action) => {
      const term = action.payload?.trim().toLowerCase() || "";
      if (!term) {
        state.filtered = [];
        return;
      }
      state.filtered = state.list.filter((t) =>
        t.task.toLowerCase().includes(term),
      );
    },
  },
});

export const { addTodo, removeTodo, editTodo, toggleTodo, searchTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
