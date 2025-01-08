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
  reducers: {
    clearErrors: (state) => {
      state.users.error = null;
      state.posts.error = null;
      state.orders.error = null;
      state.plants.error = null;
      state.sales.error = null;
    },
    clearSelectedItems: (state) => {
      state.users.selectedUser = null;
      state.posts.selectedPost = null;
      state.orders.selectedOrder = null;
      state.plants.selectedPlant = null;
    },
  },
  extraReducers: builder,
});

export const { clearErrors, clearSelectedItems } = adminSlice.actions;
