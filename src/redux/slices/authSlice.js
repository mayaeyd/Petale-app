import { createSlice } from "@reduxjs/toolkit";

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
  extraReducers: {},
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
