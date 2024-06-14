import { createAsyncThunk } from "@reduxjs/toolkit"
import { BASE_URL, NOW_PLAYING_URL, POPULAR_URL, UPCOMING_URL } from "../../src/service/urls"
import { getRequest } from "../../src/service/verb"

const fetchUpcomingMovies = createAsyncThunk(
    'movies/fetchUpcomingMovies',
    async () => {
      const response = await getRequest(UPCOMING_URL);
      return response.data;
    },
  );
  const fetchPopularMovies = createAsyncThunk(
    'movies/fetchPopularMovies',
    async () => {
      const response = await getRequest(POPULAR_URL);
      return response.data;
    },
  );
  const fetchTopRatedMovies = createAsyncThunk(
    'movies/fetchTopRatedMovies',
    async () => {
      const response = await getRequest(TOP_RATED_URL);
      return response.data;
    },
  );
  const fetchNowPlayingMovies = createAsyncThunk(
    'movies/fetchNowPlayingMovies',
    async () => {
      const response = await getRequest(NOW_PLAYING_URL);
      return response.data;
    },
  );
  const fetchMovieDetail = createAsyncThunk(
    'movies/fetchMovieDetail',
    async movie_id => {
      const response = await getRequest(BASE_URL + 'movie/' + movie_id);
      console.log(response.data)
      return response.data;
    },
  );
  const removeDetailData = createAsyncThunk(
    'movies/removeDetailData',
    async () => {
      return null;
    },
  );


export { fetchUpcomingMovies, fetchNowPlayingMovies, fetchPopularMovies, fetchTopRatedMovies, fetchMovieDetail ,removeDetailData};