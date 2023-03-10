import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { login } from "../thunkAction/authThunkAction";

export interface User {
  id: string;
  username: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isAuthenticated = false;
        state.user = null;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<User>) => {
        if (action.payload) {
          state.isAuthenticated = true;
          state.user = action.payload;
          state.error = null;
        } else {
          state.isAuthenticated = false;
          state.user = null;
          state.error = null;
        }
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
