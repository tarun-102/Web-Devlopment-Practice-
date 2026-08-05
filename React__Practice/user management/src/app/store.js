import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import showFormReducer from "./showFormSlice";
export const store = configureStore({
  reducer: {
    users: userReducer,
    showForm: showFormReducer
  },
});