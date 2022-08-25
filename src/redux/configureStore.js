import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rocketsReducer from './rockets/fetchRockets';
import missionsReducer from './missions/missions';
import userReducer from './user/user';

const storeReducer = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsReducer,
    user: userReducer,
  },
}, applyMiddleware(thunk));

export default storeReducer;
