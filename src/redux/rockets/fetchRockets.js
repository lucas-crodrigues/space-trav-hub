import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://api.spacexdata.com/v3/rockets';

export const getRockets = createAsyncThunk(
  'rockets/getRockets',
  async () => {
    try {
      const response = await axios.get(BASE_URL);
      return response.data;
    } catch (err) {
      return err.message;
    }
  },
);

const initialState = [];

export const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveToggle: (state, action) => state.map((rocket) => (
      rocket.id === action.payload.rocket.id ? { ...rocket, reserved: !rocket.reserved } : rocket
    )),
  },
  extraReducers(builder) {
    builder
      .addCase(getRockets.fulfilled, (state, action) => action.payload);
  },
});

export const { reserveToggle } = rocketSlice.actions;

export default rocketSlice.reducer;
