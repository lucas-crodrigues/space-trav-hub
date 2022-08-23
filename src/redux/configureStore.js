import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rockets from './rockets/fetchRockets';

const storeReducer = configureStore({
  reducer: {
    rockets,
  },
}, applyMiddleware(thunk));

export default storeReducer;
