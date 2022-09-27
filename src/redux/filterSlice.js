import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
    initialState: {
      filter: '',
  },
  reducers: {
    filterReduser: (state, {payload}) => {
          state.filter = payload;
    },
    
  },
});

export const { filterReduser } = filterSlice.actions;
export default filterSlice.reducer;