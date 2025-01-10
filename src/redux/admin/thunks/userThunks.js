import { createAsyncThunk } from "@reduxjs/toolkit";
import { adminApi } from "../api/adminApi";

export const userThunks = {
  fetchUsers: createAsyncThunk(
    "admin/fetchUsers",
    async () => await adminApi.get("users")
  ),

  // For fetching a single user
  fetchUserById: createAsyncThunk(
    "admin/fetchUserById",
    async (id) => await adminApi.get("users", id)
  ),

  banUser: createAsyncThunk(
    "admin/banUser",
    async ({ userId, isBanned }) =>
      await adminApi.patch("users", userId, { isBanned })
  ),
};
