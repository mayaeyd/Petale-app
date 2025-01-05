import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import plantsReducer from "./slices/plantsSlice";
import flowerRecognitionReducer from "./slices/flowerRecognitionSlice";
import postedPlantsReducer from "./slices/postedPlantsSlice";
import soldPlantsReducer from "./slices/soldPlantsSlice";
import marketplaceReducer from "./slices/marketplaceSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    plants: plantsReducer,
    flower: flowerRecognitionReducer,
    postedPlants: postedPlantsReducer,
    soldPlants: soldPlantsReducer,
    marketplace: marketplaceReducer,
  },
});

export default store;
