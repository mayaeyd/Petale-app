import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  token: null,
  isLoggedIn: false,
  loading: false,
  error: null,
};

export const LoginUser = createAsyncThunk(
  "login/LoginUser",
  async (credentials) => {
    try {
      const { email, password } = credentials;
      const response = await axios.post("http://127.0.0.1:8080/auth/login", {
        email,
        password,
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
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

      const response = await axios.post(
        "http://127.0.0.1:8080/auth/register",
        requestBody
      );

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
      state.isLoggedIn = false;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(LoginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(LoginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(LoginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
