import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addFavoriteMovie, fetchFavoriteMovies } from "../actions/favoriteActions";




const favoriteSlice = createSlice({
    name: "favorites",
    initialState: {
        favoriteMovies: null,
        pending: false

    },
    reducers: {},
    extraReducers: builder => {
        builder
          .addCase(addFavoriteMovie.pending, state => {})
          .addCase(addFavoriteMovie.fulfilled, (state, action) => {})
          .addCase(addFavoriteMovie.rejected, (state, action) => {
            state.error = action.payload.message;
          })
          .addCase(fetchFavoriteMovies.pending, state => {
            state.pending = true;
          })
          .addCase(fetchFavoriteMovies.fulfilled, (state, action) => {
            (state.favoriteMovies = action.payload.results),
              (state.pending = false);
          })
          .addCase(fetchFavoriteMovies.rejected, (state, action) => {
            state.error = action.payload.message;
            state.pending = false;
          });
      },


})

export default favoriteSlice.reducer