import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searchSlice",
  initialState: [],
  reducers: {
    addSearchFilter: (state, action) => {
      return action.payload;
    },
  },
});

export const { addSearchFilter } = searchSlice.actions;
export default searchSlice.reducer;
