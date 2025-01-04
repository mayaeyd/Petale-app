import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:8080/plants";

const initialState = {
  postedPlants: [],
  images: [],
  plantType: "flower",
  loading: false,
  error: null,
  selectedPlant: null,
  newPlant: null,
};

export const fetchPostedPlants = createAsyncThunk(
  "plants/fetchPostedPlants",
  async () => {
    const response = await axios.get(`${BASE_URL}/post/`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  }
);

export const fetchPostedPlantById = createAsyncThunk(
  "plants/fetchPostedPlantById",
  async (plantId) => {
    const response = await axios.get(`${BASE_URL}/post/${plantId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  }
);

export const postNewPlant = createAsyncThunk(
  "plants/postPlant",
  async (plantDetails) => {
    const response = await axios.post(`${BASE_URL}/post/`, plantDetails, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  }
);

export const postExistingPlant = createAsyncThunk(
  "plants/postExistingPlant",
  async (plantDetails, plantId) => {
    const response = await axios.post(
      `${BASE_URL}/post/${plantId}`,
      plantDetails,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response.data;
  }
);

const postedPlantsSlice = createSlice({
  name: "postedPlants",
  initialState,
  reducers: {
    addPlant: (state, action) => {
      state.postedPlants.push(action.payload);
    },
    removePlant: (state, action) => {
      state.postedPlants = state.postedPlants.filter(
        (plant) => plant.id !== action.payload
      );
    },
    setImages: (state, action) => {
      state.images = action.payload;
    },
    clearImages: (state) => {
      state.images = [];
    },
    setPlantType: (state, action) => {
      state.plantType = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostedPlants.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPostedPlants.fulfilled, (state, action) => {
        state.loading = false;
        state.postedPlants = action.payload.plants;
      })
      .addCase(fetchPostedPlants.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchPostedPlantById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPostedPlantById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedPlant = action.payload.plant;
      })
      .addCase(fetchPostedPlantById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(postNewPlant.pending, (state) => {
        state.loading = true;
      })
      .addCase(postNewPlant.fulfilled, (state, action) => {
        state.loading = false;
        state.newPlant = action.payload.newPlant;
      })
      .addCase(postNewPlant.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { addPlant, removePlant, setImages, clearImages, setPlantType } =
  postedPlantsSlice.actions;

export default postedPlantsSlice.reducer;
