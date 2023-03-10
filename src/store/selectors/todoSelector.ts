import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const selectTodoState = (state: RootState) => state.todo;
export const selectFilterState = (state: RootState) => state.filter;

export const selectTodos = createSelector(
  selectTodoState,
  selectFilterState,
  (todo, filter) => {
    return todo.todos.filter((todo) => {
      if (filter.status === "All") {
        return filter.search
          ? todo.text.toLowerCase().includes(filter.search.toLowerCase())
          : todo;
      } else {
        if (filter.search) {
          return filter.status === "Completed"
            ? todo.text.toLowerCase().includes(filter.search.toLowerCase()) &&
                todo.completed === true
            : todo.text.toLowerCase().includes(filter.search.toLowerCase()) &&
                todo.completed === false;
        } else {
          return filter.status === "Completed"
            ? todo.completed === true
            : todo.completed === false;
        }
      }
    });
  }
);
