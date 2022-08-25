import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
import axios from 'axios';
import { bool } from 'prop-types';

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
    reserveToggle: (state, action) => state.rockets.map((rocket) => {
      if (rocket.id !== action.payload.rocket.id) {
        return rocket;
      }
      return { ...rocket, reserved: !rocket.reserved };
    }),

    // reserveToggle: {
    //   reducer: (state, action) => {
    //     // state.rockets.map((rocket) => (rocket.rocketId === action.payload ? { ...rocket, reserved: !rocket.reserved } : rocket));
    //     // state.rockets.map((rocket) => {
    //     //   // if (rocket.rocketId === action.payload) {
    //     //   //   console.log(current(rocket))
    //     //   //   return {
    //     //   //     ...rocket,
    //     //   //     reserved: true,
    //     //   //   };
    //     //   // }
    //     //   // return rocket;
    //     //   console.log('The current state is:');
    //     //   console.log(current(state));
    //     //   console.log('The current rocket is:');
    //     //   console.log(current(rocket));
    //     //   console.log(`rocketId:${rocket.rocketId} = actionPayload:${action.payload} ? its ${rocket.rocketId === action.payload} also the reserved status is ${rocket.reserved}`);
    //     //   return (rocket.rocketId === action.payload
    //     //     ? { ...rocket, reserved: !rocket.reserved }
    //     //     : rocket);
    //     // });
    //   },
    //   prepare: (rocketId) => ({
    //     payload: rocketId,
    //   }),
    // },
  },
  extraReducers(builder) {
    builder
      .addCase(getRockets.pending, (state) => ({ state, status: 'loading' }))
      .addCase(getRockets.fulfilled, (state, action) => ({ state, status: 'succeed', rockets: action.payload }))
        // const rocketList = action.payload.map((element) => ({
        //   rocketId: element.id,
        //   rocketName: element.rocket_name,
        //   rocketDesc: element.description,
        //   rocketImg: element.flickr_images[0],
      //   //   // reserved: bool,
      //   // }));
      //   return { state, status: 'succeed', rockets: action.payload };
      // })
      .addCase(getRockets.rejected, (state, action) => ({ state, status: 'fail', error: action.error.message }));
  },
});

export const selectAllRockets = (state) => state.rockets.rockets;
export const getRocketsStatus = (state) => state.rockets.status;
export const getRocketsError = (state) => state.rockets.error;

export const { reserveToggle } = rocketSlice.actions;

export default rocketSlice.reducer;
