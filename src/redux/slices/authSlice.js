import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://127.0.0.1:8080/auth";

const initialState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

export const LoginUser = createAsyncThunk(
  "login/LoginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, credentials);
      return response.data;
    } catch (error) {
      if (error.response?.data) {
        return rejectWithValue(error.response.data.message || "Login failed");
      }
      return rejectWithValue("Something went wrong. Please try again.");
    }
  }
);

export const RegisterUser = createAsyncThunk(
  "register/RegisterUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        phoneNumber,
        role,
        gardenName,
        gardenLocation,
      } = credentials;

      if (password !== confirmPassword) {
        return rejectWithValue("Passwords do not match");
      }

      const requestBody = {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        phoneNumber,
        role,
        ...(role === "gardener" && { gardenName, gardenLocation }),
      };

      const response = await axios.post(`${BASE_URL}/register`, requestBody);

      return response.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    // Login User
    builder
      .addCase(LoginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(LoginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(LoginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    // Register User
    builder
      .addCase(RegisterUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(RegisterUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
      })
      .addCase(RegisterUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
