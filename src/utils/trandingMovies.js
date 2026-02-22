import { createSlice } from "@reduxjs/toolkit";

const trendingMoviesSlice = createSlice({
  name: "trendingMovies",
  initialState: {
    movies: null,
    movieVideos: null,
    popularmovies: null,
    topratedmovies: null,
    top10Movies:null, 
    gotoMoviePlayId: null,
    playMoviesAndCast: null,
  },
  reducers: {
    setTrendingMovies: (state, action) => {
      state.movies = action.payload;
    },
    addTrendingMovieVideo: (state, action) => {
      state.movieVideos = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularmovies = action.payload;
    },
    addTopRatedMovies:(state, action )=>{
      state.topratedmovies = action.payload;
    },
    addTop10Movies:(state, action)=>{
      state.top10Movies = action.payload
    },
    addIdTonavigateMoviePlay:(state, action)=>{
      state.gotoMoviePlayId = action.payload
    },
   addCastAndMoviePlay:(state, action)=>{
    state.playMoviesAndCast = action.payload
   }
  },
});

export const {
  setTrendingMovies,
  addTrendingMovieVideo,
  addPopularMovies,
  addTopRatedMovies,
  addTop10Movies,
  addIdTonavigateMoviePlay,
  addCastAndMoviePlay
} = trendingMoviesSlice.actions;

export default trendingMoviesSlice.reducer;
