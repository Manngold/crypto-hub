import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import uiReducer from '../features/ui/uiSlice';
import marketReducer from '../features/market/marketSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer,
    market: marketReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
