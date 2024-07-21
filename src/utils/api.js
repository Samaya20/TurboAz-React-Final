import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchCars = async () => {
  try {
    const response = await api.get('/cars');
    return response.data;
  } catch (error) {
    console.error('Error fetching cars:', error);
    throw error;
  }
};

export const fetchCarById = async (carId) => {
  try {
    const response = await api.get(`/cars/${carId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching car with ID ${carId}:, error`);
    throw error;
  }
};

export const addCar = async (car) => {
  try {
    const response = await api.post('/cars', car);
    return response;
  } catch (error) {
    console.error('Error adding new car:', error);
    throw error;
  }
};

export const deleteCar = async (carId) => {
  try {
    await api.delete(`/cars/${carId}`);
  } catch (error) {
    console.error(`Error deleting car with ID ${carId}:, error`);
    throw error;
  }
};