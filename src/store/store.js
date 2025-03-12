import { configureStore } from '@reduxjs/toolkit';
import candidatesReducer from './candidateSlice';

const store = configureStore({
  reducer: {
    candidates: candidatesReducer
  }
});

export default store;