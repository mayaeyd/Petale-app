import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:8080/plants";

export const fetchSoldPlants = createAsyncThunk(
  "plants/fetchSoldPlants",
  async () => {
    const response = await axios.get(`${BASE_URL}/sold/`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  }
);

export const fetchSoldPlantById = createAsyncThunk(
  "plants/fetchSoldPlantById",
  async (plantId) => {
    const response = await axios.get(`${BASE_URL}/sold/${plantId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  }
);

const initialState = {
  soldPlants: [],
  loading: false,
  error: null,
  selectedPlant: null,
};

const soldPlantsSlice = createSlice({
  name: "soldPlants",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSoldPlants.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSoldPlants.fulfilled, (state, action) => {
        state.loading = false;
        state.soldPlants = action.payload.plants;
      })
      .addCase(fetchSoldPlants.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchSoldPlantById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSoldPlantById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedPlant = action.payload.plant;
      })
      .addCase(fetchSoldPlantById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default soldPlantsSlice.reducer;
