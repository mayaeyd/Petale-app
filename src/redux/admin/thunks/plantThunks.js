import { createAsyncThunk } from "@reduxjs/toolkit";
import { adminApi } from "../api/adminApi";

export const plantThunks = {
  fetchPlants: createAsyncThunk(
    "admin/fetchPlants",
    async (id = null) => await adminApi.get("plants", id)
  ),
};
