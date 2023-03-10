import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import authReducer from './slice/authSlice';
import todoReducer from './slice/todoSlice';
import filterReducer from './slice/filterSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    todo: todoReducer,
    filter: filterReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
