import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import contestReducer from './contestSlice'; // <-- Імпортуємо

export const store = configureStore({
  reducer: {
    userData: userReducer,
    contestData: contestReducer, // <-- Додаємо в store
  },
});