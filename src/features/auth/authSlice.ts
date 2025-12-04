import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type UserRole = 'guest' | 'user' | 'admin';

interface AuthState {
  isAuthenticated: boolean;
  userName: string | null;
  role: UserRole;
}

const initialState: AuthState = {
  isAuthenticated: false,
  userName: null,
  role: 'guest',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<{ userName: string; role: UserRole }>) => {
      state.isAuthenticated = true;
      state.userName = action.payload.userName;
      state.role = action.payload.role;
    },
    logout: state => {
      state.isAuthenticated = false;
      state.userName = null;
      state.role = 'guest';
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
