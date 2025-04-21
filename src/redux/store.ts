import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import searchReducer from './searchSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    search: searchReducer,
  },
});

// Types for use throughout the app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
