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
  extraReducers:
    // Users
    builder
      .addCase(userThunks.fetchUsers.pending, (state) => {
        state.users.loading = true;
        state.users.error = null;
      })
      .addCase(userThunks.fetchUsers.fulfilled, (state, action) => {
        state.users.loading = false;
        if (Array.isArray(action.payload.data)) {
          state.users.items = action.payload.data;
          state.users.selectedUser = null;
        } else {
          state.users.selectedUser = action.payload.data;
        }
      })
      .addCase(userThunks.fetchUsers.rejected, (state, action) => {
        state.users.loading = false;
        state.users.error = action.error.message;
      })

      // Posts
      .addCase(postThunks.fetchPosts.pending, (state) => {
        state.posts.loading = true;
        state.posts.error = null;
      })
      .addCase(postThunks.fetchPosts.fulfilled, (state, action) => {
        state.posts.loading = false;
        if (Array.isArray(action.payload.data)) {
          state.posts.items = action.payload.data;
          state.posts.selectedPost = null;
        } else {
          state.posts.selectedPost = action.payload.data;
        }
      })
      .addCase(postThunks.fetchPosts.rejected, (state, action) => {
        state.posts.loading = false;
        state.posts.error = action.error.message;
      })
      .addCase(postThunks.deletePost.fulfilled, (state, action) => {
        state.posts.items = state.posts.items.filter(
          (post) => post._id !== action.payload.postId
        );
      })

      // Orders
      .addCase(orderThunks.fetchOrders.pending, (state) => {
        state.orders.loading = true;
        state.orders.error = null;
      })
      .addCase(orderThunks.fetchOrders.fulfilled, (state, action) => {
        state.orders.loading = false;
        if (Array.isArray(action.payload.data)) {
          state.orders.items = action.payload.data;
          state.orders.selectedOrder = null;
        } else {
          state.orders.selectedOrder = action.payload.data;
        }
      })
      .addCase(orderThunks.fetchOrders.rejected, (state, action) => {
        state.orders.loading = false;
        state.orders.error = action.error.message;
      })

      // Plants
      .addCase(plantThunks.fetchPlants.pending, (state) => {
        state.plants.loading = true;
        state.plants.error = null;
      })
      .addCase(plantThunks.fetchPlants.fulfilled, (state, action) => {
        state.plants.loading = false;
        if (Array.isArray(action.payload.data)) {
          state.plants.items = action.payload.data;
          state.plants.selectedPlant = null;
        } else {
          state.plants.selectedPlant = action.payload.data;
        }
      })
      .addCase(plantThunks.fetchPlants.rejected, (state, action) => {
        state.plants.loading = false;
        state.plants.error = action.error.message;
      })

      // Sales
      .addCase(orderThunks.fetchSales.pending, (state) => {
        state.sales.loading = true;
        state.sales.error = null;
      })
      .addCase(orderThunks.fetchSales.fulfilled, (state, action) => {
        state.sales.loading = false;
        state.sales.data = action.payload.data;
      })
      .addCase(orderThunks.fetchSales.rejected, (state, action) => {
        state.sales.loading = false;
        state.sales.error = action.error.message;
      }),
});

export const { clearErrors, clearSelectedItems } = adminSlice.actions;
