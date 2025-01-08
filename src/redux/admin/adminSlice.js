import { createSlice } from "@reduxjs/toolkit";
import { userThunks } from "./thunks/userThunks";
import { postThunks } from "./thunks/postThunks";
import { orderThunks } from "./thunks/orderThunks";
import { plantThunks } from "./thunks/plantThunks";

const initialState = {
  users: {
    items: [],
    selectedUser: null,
    loading: false,
    error: null,
  },
  posts: {
    items: [],
    selectedPost: null,
    loading: false,
    error: null,
  },
  orders: {
    items: [],
    selectedOrder: null,
    loading: false,
    error: null,
  },
  plants: {
    items: [],
    selectedPlant: null,
    loading: false,
    error: null,
  },
  sales: {
    data: [],
    loading: false,
    error: null,
  },
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: builder,
});
