import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './slice/counterSlice';
import movieReducer from './slice/movieSlice';
import favoriteSlice from './slice/favoriteSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    movies:movieReducer,
    favorites:favoriteSlice
  },
});
 