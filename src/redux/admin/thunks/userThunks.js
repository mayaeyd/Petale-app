import { createAsyncThunk } from "@reduxjs/toolkit";
import { adminApi } from "../api/adminApi";

export const userThunks = {
  fetchUsers: createAsyncThunk(
    "admin/fetchUsers",
    async (id = null) => await adminApi.get("users", id)
  ),
};
