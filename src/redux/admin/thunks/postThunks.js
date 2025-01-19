import { createAsyncThunk } from "@reduxjs/toolkit";
import { adminApi } from "../api/adminApi";

export const postThunks = {
  fetchPosts: createAsyncThunk(
    "admin/fetchPosts",
    async (id = null) => await adminApi.get("posts", id)
  ),

  fetchPostsByIds: createAsyncThunk(
    "admin/fetchPostsByIds",
    async (ids) => await adminApi.get("posts", null, ids)
  ),

  deletePost: createAsyncThunk("admin/deletePost", async (postId) => {
    const response = await adminApi.delete("posts", postId);
    return { postId, ...response };
  }),

  editPost: createAsyncThunk(
    "admin/editPost",
    async ({ postId, postData }) =>
      await adminApi.put("posts", postId, postData)
  ),
};
