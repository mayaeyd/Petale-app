import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://127.0.0.1:8080/orders";

const initialState = {
  orders: [],
  orderDetails: null,
  loading: false,
  error: null,
  success: false,
};

export const CreateOrder = createAsyncThunk(
  "orders/CreateOrder",
  async (orderData, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Unauthorized: No token found");
      }

      const response = await axios.post(`${BASE_URL}/`, orderData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message ||
          "An error occurred while creating the order"
      );
    }
  }
);

export const GetUserOrders = createAsyncThunk(
  "orders/GetUserOrders",
  async (userId, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Unauthorized: No token found");
      }

      const response = await axios.get(`${BASE_URL}/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data?.user?.orders;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message ||
          "An error occurred while fetching orders"
      );
    }
  }
);

export const GetGardenerOrders = createAsyncThunk(
  "orders/GetGardenerOrders",
  async (gardenerId, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Unauthorized: No token found");
      }

      const response = await axios.get(`${BASE_URL}/gardener/${gardenerId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.orders;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message ||
          "An error occurred while fetching orders"
      );
    }
  }
);

export const UpdateOrderStatus = createAsyncThunk(
  "orders/UpdateOrderStatus",
  async ({ userId, orderId, status }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Unauthorized: No token found");
      }

      const response = await axios.patch(
        `${BASE_URL}/user/${userId}/order/${orderId}`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data.order;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message ||
          "An error occurred while updating order status"
      );
    }
  }
);

export const GetAllGardenersOrders = createAsyncThunk(
  "orders/GetAllGardenersOrders",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Unauthorized: No token found");
      }

      const response = await axios.get(`http://localhost:8080/admin/orders/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.orders;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message ||
          "An error occurred while fetching all gardeners' orders"
      );
    }
  }
);

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    clearOrderError: (state) => {
      state.error = null;
    },
    clearOrderDetails: (state) => {
      state.orderDetails = null;
    },
    reset: (state) => {
      state.orderDetails = null;
      state.loading = false;
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(CreateOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(CreateOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.orders.push(action.payload);
        state.success = true;
      })
      .addCase(CreateOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(GetUserOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(GetUserOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
        state.success = true;
      })
      .addCase(GetUserOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(GetGardenerOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(GetGardenerOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
        state.success = true;
      })
      .addCase(GetGardenerOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(UpdateOrderStatus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(UpdateOrderStatus.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        const updatedOrder = action.payload;
        const orderIndex = state.orders.findIndex(
          (order) => order._id === updatedOrder._id
        );
        if (orderIndex >= 0) {
          state.orders[orderIndex] = updatedOrder;
        }
      })
      .addCase(UpdateOrderStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(GetAllGardenersOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(GetAllGardenersOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
        state.success = true;
      })
      .addCase(GetAllGardenersOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearOrderError, clearOrderDetails } = orderSlice.actions;
export default orderSlice.reducer;
