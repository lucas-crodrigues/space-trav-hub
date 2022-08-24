import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rockets from './rockets/fetchRockets';
import missionsReducer from './missions/missions';

const storeReducer = configureStore({
  reducer: {
    rockets,
    missions: missionsReducer,
  },
}, applyMiddleware(thunk));

export default storeReducer;
