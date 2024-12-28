import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const predictFlower = createAsyncThunk(
  "predict/predictFlower",
  async (imageFile) => {
    try {
      const formData = new FormData();
      formData.append("image", imageFile);

      const response = await axios.post(
        "http://127.0.0.1:8000/predict/",
        formData
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  prediction: null,
  confidence: null,
  loading: false,
  error: null,
};

const flowerRecognitionSlice = createSlice({
  name: "flower",
  initialState,
  reducers: {
    clearPrediction: (state) => {
      state.prediction = null;
      state.confidence = null;
      state.error = null;
    },
  },
  extraReducers: {},
});

export const { clearPrediction } = flowerRecognitionSlice.actions;
export default flowerRecognitionSlice.reducer;
