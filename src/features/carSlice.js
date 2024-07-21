import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCars as fetchCarsFromAPI, deleteCar as deleteCarFromAPI } from '../utils/api'; // utils/api.js dosyasındaki fetchCars ve deleteCar fonksiyonlarını kullanın

export const fetchCars = createAsyncThunk('cars/fetchCars', async () => {
  const response = await fetchCarsFromAPI(); 
  return response;
});

export const deleteCar = createAsyncThunk('cars/deleteCar', async (carId) => {
  await deleteCarFromAPI(carId);
  return carId;
});

const initialState = {
  cars: [],
  status: 'idle', 
  error: null,
};

const carSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cars = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(deleteCar.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteCar.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cars = state.cars.filter(car => car.id !== action.payload);
      })
      .addCase(deleteCar.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectAllCars = (state) => state.cars.cars;

export const selectCarById = (state, carId) => {
  return state.cars.cars.find(car => car.id === parseInt(carId));
};

export default carSlice.reducer;