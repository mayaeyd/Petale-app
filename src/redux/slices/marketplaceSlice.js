import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:8080/marketplace";

const initialState = {
  posts: [],
  trendingPosts: [],
  loading: false,
  error: null,
};

export const getAllPosts = createAsyncThunk(
  "marketplace/getAllPosts",
  async () => {
    try {
      const response = await axios.get(`${BASE_URL}/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

const marketplaceSlice = createSlice({
  name: "marketplace",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
        state.trendingPosts = [
          state.posts[0].listings[5],
          state.posts[0].listings[7],
          state.posts[0].listings[10],
        ];
      })
      .addCase(getAllPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default marketplaceSlice.reducer;
