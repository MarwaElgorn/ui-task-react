import { createSlice } from "@reduxjs/toolkit";
import { newsMock } from "@/data/newsMock";

const initialState = {
  items: newsMock,
  query: "",
  sort: "newest",
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
  },
});

export const { setQuery, setSort } = newsSlice.actions;
export default newsSlice.reducer;
