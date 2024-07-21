import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCars, selectAllCars } from '../features/carSlice';
import { selectFilters } from '../features/filterSlice';
import CarCard from './CarCard';
import "../assets/styles/CarList.css";

const CarList = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectAllCars);
  const filters = useSelector(selectFilters);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const filteredCars = cars.filter(car => {
    const { make, model, year, minPrice, maxPrice } = filters;
    const carPrice = parseFloat(car.price) || 0;
    const min = parseFloat(minPrice) || 0;
    const max = parseFloat(maxPrice) || Infinity;

    return (
      (!make || car.make.includes(make)) &&
      (!model || car.model.includes(model)) &&
      (!year || car.year.includes(year)) &&
      (carPrice >= min && carPrice <= max)
    );
  });

  return (
    <div className="car-list">
      {filteredCars.map(car => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
};

export default CarList;
