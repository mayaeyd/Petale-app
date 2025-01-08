import { createAsyncThunk } from "@reduxjs/toolkit";
import { adminApi } from "../api/adminApi";

export const postThunks = {
  fetchPosts: createAsyncThunk(
    "admin/fetchPosts",
    async (id = null) => await adminApi.get("posts", id)
  ),
  deletePost: createAsyncThunk("admin/deletePost", async (postId) => {
    const response = await adminApi.delete("posts", postId);
    return { postId, ...response };
  }),
};
