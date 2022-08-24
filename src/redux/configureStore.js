import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rockets from './rockets/fetchRockets';
import missionsReducer from './missions/missions';
import userReducer from './user/user';

const storeReducer = configureStore({
  reducer: {
    rockets,
    missions: missionsReducer,
    user: userReducer,
  },
}, applyMiddleware(thunk));

export default storeReducer;
