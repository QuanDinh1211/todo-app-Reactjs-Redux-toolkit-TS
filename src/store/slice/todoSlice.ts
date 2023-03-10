import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getTodos,addTodos, editTodos, deleteTodos } from '../thunkAction/todoThunkAction';
 
export interface Todo {
  id: string;
  text: string;
  completed: boolean
}

export interface TodoState {
  todo: Todo | null;
  todos: Array<Todo> | []
}

const initialState: TodoState = {
    todo: null,
    todos: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    editTodoAction(state, action: PayloadAction<Todo>) {
      state.todos = state.todos.map(todo => {
        if(todo.id === action.payload.id) {
          return action.payload
        } 
        return todo
      })
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.fulfilled, (state, action: PayloadAction<Todo[]>) => {
        state.todos = action.payload
      })
      .addCase(addTodos.fulfilled, (state, action: PayloadAction<Todo>) => {
        state.todos = [...state.todos, action.payload]
      })
      .addCase(editTodos.fulfilled, (state, action: PayloadAction<Todo>) => {
        state.todos = state.todos.map(todo => {
          if(todo.id === action.payload.id) {
            return action.payload
          } 
          return todo
        })
      })
      .addCase(deleteTodos.fulfilled, (state, action: PayloadAction<Todo>) => {
        state.todos = state.todos.filter(todo => {
          return todo.id !== action.payload.id
        })
      })
    }
});

export const { editTodoAction } = todoSlice.actions;

export default todoSlice.reducer;
