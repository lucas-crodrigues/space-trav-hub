import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rocketsReducer from './rockets/fetchRockets';
import missionsReducer from './missions/missions';

const storeReducer = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsReducer,
  },
}, applyMiddleware(thunk));

export default storeReducer;
