import { createSlice } from "@reduxjs/toolkit";



const searchtextSlice = createSlice({
    name:"searchText",
    initialState:null,
    reducers:{
        addText:(state,action)=>{
            return action.payload
        }
    }
});

export const  {addText} = searchtextSlice.actions;
export default searchtextSlice.reducer