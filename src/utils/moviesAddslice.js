import { createSlice } from "@reduxjs/toolkit";


const addMoviesSlice = createSlice({
    name:"addmovies",
    initialState:[null],
    reducers:{
        addMovies:(state, action)=>{
            return action.payload;
        }
    }
})


export const {addMovies} = addMoviesSlice.actions;
export default addMoviesSlice.reducer;
