import { createSlice } from "@reduxjs/toolkit";
import { userThunks } from "./thunks/userThunks";
import { postThunks } from "./thunks/postThunks";
import { orderThunks } from "./thunks/orderThunks";
import { plantThunks } from "./thunks/plantThunks";

const initialState = {
  users: {
    items: [],
    count: 0,
    selectedUser: null,
    loading: false,
    error: null,
  },
  posts: {
    items: [],
    listings: [],
    count: 0,
    selectedPost: null,
    loading: false,
    error: null,
  },
  orders: {
    items: [],
    count: 0,
    selectedOrder: null,
    loading: false,
    error: null,
  },
  plants: {
    items: [],
    count: 0,
    selectedPlant: null,
    loading: false,
    error: null,
  },
  sales: {
    data: [],
    count: 0,
    totalRevenue: 0,
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
  extraReducers: (builder) => {
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
          state.users.count = action.payload.count;
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
          state.posts.count = action.payload.count;
          state.posts.listings = action.payload.data.flatMap(
            (item) => item.listings
          );
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
          state.orders.count = action.payload.count;
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
          state.plants.count = action.payload.count;
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
        state.sales.totalRevenue = action.payload.data.totalRevenue;
        state.sales.count = action.payload.data.totalSales;
      })
      .addCase(orderThunks.fetchSales.rejected, (state, action) => {
        state.sales.loading = false;
        state.sales.error = action.error.message;
      });
  },
});

export const { clearErrors, clearSelectedItems } = adminSlice.actions;

export const selectAllUsers = (state) => state.admin.users.items;
export const selectUsersCount = (state) => state.admin.users.count;
export const selectSelectedUser = (state) => state.admin.users.selectedUser;
export const selectUsersLoading = (state) => state.admin.users.loading;
export const selectUsersError = (state) => state.admin.users.error;

export const selectAllPosts = (state) => state.admin.posts.items;
export const selectAllListings = (state) => state.admin.posts.listings;
export const selectPostsCount = (state) => state.admin.posts.count;
export const selectSelectedPost = (state) => state.admin.posts.selectedPost;
export const selectPostsLoading = (state) => state.admin.posts.loading;
export const selectPostsError = (state) => state.admin.posts.error;

export const selectAllOrders = (state) => state.admin.orders.items;
export const selectOrdersCount = (state) => state.admin.orders.count;
export const selectSelectedOrder = (state) => state.admin.orders.selectedOrder;
export const selectOrdersLoading = (state) => state.admin.orders.loading;
export const selectOrdersError = (state) => state.admin.orders.error;

export const selectAllPlants = (state) => state.admin.plants.items;
export const selectPlantsCount = (state) => state.admin.plants.count;
export const selectSelectedPlant = (state) => state.admin.plants.selectedPlant;
export const selectPlantsLoading = (state) => state.admin.plants.loading;
export const selectPlantsError = (state) => state.admin.plants.error;

export const selectSalesData = (state) => state.admin.sales.data;
export const selectSalesCount = (state) => state.admin.sales.count;
export const selectSalesLoading = (state) => state.admin.sales.loading;
export const selectSalesError = (state) => state.admin.sales.error;

export default adminSlice.reducer;
