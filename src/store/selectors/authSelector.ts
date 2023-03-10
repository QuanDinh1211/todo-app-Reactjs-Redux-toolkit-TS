import { AuthState } from "../slice/authSlice";

export const selectAuthState = (state: { auth: AuthState }) => state.auth;
