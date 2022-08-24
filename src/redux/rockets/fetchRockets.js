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
  reducers: {
    reserveToggle: {
      reducer: (state, action) => {
        console.log(state);
        console.log(state.rockets);
        state.rockets.map((rocket) => {
          console.log(rocket.rocketId);
          console.log(action.payload);
          return (rocket.rocketId === action.payload
            ? console.log('im true') && { ...rocket, reserved: !rocket.reserved }
            : rocket);
        });
      },
      prepare: (rocketId) => ({
        payload: rocketId,
      }),
    // reserveRocket: {
    //   reducer: (state, action) => state.rockets.map((element) => (
    //     element.rocketId === action.payload ? { ...element, reserved: true } : element)),
    //   prepare: (rocketId) => ({
    //     payload: rocketId,
    //   }),
    // },
    // cancelReserve: {
    //   reducer: (state, action) => state.rockets.map((element) => (
    //     element.rocketId === action.payload ? { ...element, reserved: false } : element)),
    //   prepare: (rocketId) => ({
    //     payload: rocketId,
    //   }),
    // },
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getRockets.pending, (state) => ({ ...state, status: 'loading' }))
      .addCase(getRockets.fulfilled, (state, action) => {
        const rocketList = action.payload.map((element) => ({
          rocketId: element.rocket_id,
          rocketName: element.rocket_name,
          rocketDesc: element.description,
          rocketImg: element.flickr_images[0],
          reserved: false,
        }));
        return { ...state, status: 'succeed', rockets: rocketList };
      })
      .addCase(getRockets.rejected, (state, action) => ({ ...state, status: 'fail', error: action.error.message }));
  },
});

export const selectAllRockets = (state) => state.rockets.rockets;
export const getRocketsStatus = (state) => state.rockets.status;
export const getRocketsError = (state) => state.rockets.error;

export const { reserveToggle } = rocketSlice.actions;

export default rocketSlice.reducer;
