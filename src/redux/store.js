import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import plantsReducer from "./slices/plantsSlice";
import flowerRecognitionReducer from "./slices/flowerRecognitionSlice";
import postedPlantsReducer from "./slices/postedPlantsSlice";
import soldPlantsReducer from "./slices/soldPlantsSlice";
import marketplaceReducer from "./slices/marketplaceSlice";
import adminReducer from "./admin/adminSlice";
import cartReducer from "./slices/cartSlice";
import orderReducer from "./slices/orderSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    plants: plantsReducer,
    flower: flowerRecognitionReducer,
    postedPlants: postedPlantsReducer,
    soldPlants: soldPlantsReducer,
    marketplace: marketplaceReducer,
    admin: adminReducer,
    cart: cartReducer,
    order: orderReducer,
  },
});

export default store;
