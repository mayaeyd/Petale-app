import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:8080/plants";

const initialState = {
  plants: [],
  images: [],
  plantType: "flower",
  loading: false,
  error: null,
  selectedPlant: null,
  newPlant: null,
};

export const fetchPlants = createAsyncThunk("plants/fetchPlants", async () => {
  const response = await axios.get(`${BASE_URL}/`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
});

export const fetchPlantById = createAsyncThunk(
  "plants/fetchPlantById",
  async (plantId, { rejectWithValue }) => {
    const response = await axios.get(`${BASE_URL}/${plantId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  }
);

export const addNewPlant = createAsyncThunk(
  "plants/addNewPlant",
  async (plantDetails) => {
    const response = await axios.post(`${BASE_URL}/`, plantDetails, {
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
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  }
);

export const harvestPlant = createAsyncThunk(
  "plant/harvestPlant",
  async (plantId) => {
    const response = await axios.put(`${BASE_URL}/harvest/${plantId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  }
);

const plantsSlice = createSlice({
  name: "plants",
  initialState,
  reducers: {
    addPlant: (state, action) => {
      state.plants.push(action.payload);
    },
    removePlant: (state, action) => {
      state.plants = state.plants.filter(
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
      .addCase(fetchPlants.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPlants.fulfilled, (state, action) => {
        state.loading = false;
        state.plants = action.payload.plants;
      })
      .addCase(fetchPlants.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchPlantById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPlantById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedPlant = action.payload;
      })
      .addCase(fetchPlantById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addNewPlant.pending, (state) => {
        state.loading = true;
      })
      .addCase(addNewPlant.fulfilled, (state, action) => {
        state.loading = false;
        state.newPlant = action.payload.garden;
      })
      .addCase(addNewPlant.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { addPlant, removePlant, setImages, clearImages, setPlantType } =
  plantsSlice.actions;

export default plantsSlice.reducer;
