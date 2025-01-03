import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:8080/plants";

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
