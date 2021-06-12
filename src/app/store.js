import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import moviesReducer from "../features/Movies/movieSlice"
import authReducer from "../features/Movies/authSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    myMovies: moviesReducer,
    user: authReducer,
  },
});
