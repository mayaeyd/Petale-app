import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:8080/marketplace";

const initialState = {
  posts: [],
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
    builder;
  },
});

export default marketplaceSlice.reducer;
