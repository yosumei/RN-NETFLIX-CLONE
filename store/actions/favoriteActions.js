import { createAsyncThunk } from "@reduxjs/toolkit"
import { ACCOUNT_URL, ADD_FAVORITE_URL, BASE_URL, UPCOMING_URL } from "../../src/service/urls"
import { postRequest } from "../../src/service/verb"
import { ACCOUNT_ID } from "../../src/utils/constants"

const addFavoriteMovie = createAsyncThunk(
    'favorites/addFavoriteMovie',
    async values => {
      const url = `${BASE_URL}${ACCOUNT_URL}${ACCOUNT_ID}${ADD_FAVORITE_URL}`;
      const response = await postRequest(url, values);
      return response.data;
    },
  );
  const fetchFavoriteMovies = createAsyncThunk(
    'favorites/fetchFavoriteMovies',
    async () => {
      const url = `${BASE_URL}${ACCOUNT_URL}${ACCOUNT_ID}${FAVORITE_URL}`;
      const response = await getRequest(url);
      return response.data;
    },
  );

export {addFavoriteMovie,fetchFavoriteMovies}