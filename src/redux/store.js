import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import plantsReducer from "./slices/plantsSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    plants: plantsReducer,
  },
});

export default store;
