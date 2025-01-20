import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:8080/marketplace";

const initialState = {
  posts: [],
  trendingPosts: [],
  singlePost: null,
  loading: false,
  error: null,
  data: [],
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
      throw error;
    }
  }
);

export const getPostById = (postId) => (dispatch, getState) => {
  const state = getState();

  for (const gardener of state?.marketplace?.data) {
    for (const listing of gardener?.listings) {
      if (listing?._id == postId) {
        dispatch({
          type: "marketplace/setSinglePost",
          payload: { post: listing, gardener },
        });
        return;
      }
    }
  }
};

const marketplaceSlice = createSlice({
  name: "marketplace",
  initialState,
  reducers: {
    setSinglePost(state, action) {
      state.singlePost = action.payload;
    },
    setSinglePostError(state, action) {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;

        if (Array.isArray(action.payload)) {
          state.posts = action.payload?.flatMap(
            (gardener) => gardener.listings
          );

          if (state.posts?.length > 0) {
            state.trendingPosts = state?.posts?.slice(0, 3);
          }
        } else {
          state.posts = [];
          state.error = "Invalid data format received";
        }
      })
      .addCase(getAllPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setSinglePost, setSinglePostError } = marketplaceSlice.actions;
export default marketplaceSlice.reducer;
