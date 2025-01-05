import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const marketplaceSlice = createSlice({
  name: "marketplace",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder;
  },
});

export default marketplaceSlice.reducer;
