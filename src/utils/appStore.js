import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import trandingMoviesReducer from "./trandingMovies"
import addMoviesSlicereducer from "./moviesAddslice";
import searchSlicereducer from "./searchSlice"
import searchTextreducer from "./searchtextSlice"

const appStore = configureStore({
    reducer: {
        user: userReducer,
        newMovies:trandingMoviesReducer,
        addMoviesData :addMoviesSlicereducer,
        searchmoviesData :searchSlicereducer,
        searchTextData:searchTextreducer
    },
})

export default appStore;