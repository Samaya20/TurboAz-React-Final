import { configureStore } from '@reduxjs/toolkit';
import carReducer from '../features/carSlice';
import filterReducer from '../features/filterSlice';

const store = configureStore({
  reducer: {
    cars: carReducer,
    filters: filterReducer 
  },
});

export default store;
