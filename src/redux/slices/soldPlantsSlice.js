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
    builder;
  },
});

export default soldPlantsSlice.reducer;
