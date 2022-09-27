import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = {
    filter: '',
};

const filterSlice = createSlice({
  name: "filter",
  initialState: filterInitialState,
  reducers: {
    filterReduser: (state, {payload}) => {
          state.filter = payload;
    },
    
  },
});

export const { filterReduser } = filterSlice.actions;
export default filterSlice.reducer;