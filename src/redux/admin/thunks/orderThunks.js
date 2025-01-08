import { createAsyncThunk } from "@reduxjs/toolkit";
import { adminApi } from "../api/adminApi";

export const orderThunks = {
  fetchOrders: createAsyncThunk(
    "admin/fetchOrders",
    async (id = null) => await adminApi.get("orders", id)
  ),

  fetchSales: createAsyncThunk(
    "admin/fetchSales",
    async () => await adminApi.get("sales")
  ),
};
