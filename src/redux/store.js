import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import plantsReducer from "./slices/plantsSlice";
import flowerRecognitionReducer from "./slices/flowerRecognitionSlice";
import postedPlantsReducer from "./slices/postedPlantsSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    plants: plantsReducer,
    flower: flowerRecognitionReducer,
    postedPlants: postedPlantsReducer,
  },
});

export default store;
