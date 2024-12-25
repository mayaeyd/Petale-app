import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:8080/plants";

export const fetchPlants = createAsyncThunk("plants/fetchPlants", async () => {
  const response = await axios.get(`${BASE_URL}/`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
});

const plantsSlice = createSlice({
  name: "plants",
  initialState: {
    plants: [],
    loading: false,
    error: null,
  },
  reducers: {
    addPlant: (state, action) => {
      state.plants.push(action.payload);
    },
    removePlant: (state, action) => {
      state.plants = state.plants.filter(
        (plant) => plant.id !== action.payload
      );
    },
  },
  
});

export const { addPlant, removePlant } = plantsSlice.actions;

export default plantsSlice.reducer;
