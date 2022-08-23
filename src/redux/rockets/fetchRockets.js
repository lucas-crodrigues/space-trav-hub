/* eslint-disable no-param-reassign */
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

const initialState = {
  rockets: [],
  status: 'initial',
  error: null,
};

export const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getRockets.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getRockets.fulfilled, (state, action) => {
        state.status = 'succeed';
        state.rockets = [...state.rockets, action.payload];
      })
      .addCase(getRockets.rejected, (state, action) => {
        state.status = 'fail';
        state.error = action.error.message;
      });
  },
});

export const selectAllRockets = (state) => state.rockets.rockets;
export const getRocketsStatus = (state) => state.rockets.status;
export const getRocketsError = (state) => state.rockets.error;

export default rocketSlice.reducer;
