import React, { useEffect, useState } from 'react';
import { fetchCars } from '../utils/api';
import CarCard from '../components/CarCard';
import "../assets/styles/AdvertsPage.css";

const AdvertsPage = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchAndSetCars = async () => {
      try {
        const allCars = await fetchCars();
        const newCarIds = JSON.parse(localStorage.getItem("carIds")) || [];
        const newCars = allCars.filter(car => newCarIds.includes(car.id));
        setCars(newCars);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    fetchAndSetCars();
  }, []);

  return (
    <div className="my-adverts">
      <h1>My Adverts</h1>
      {cars.length === 0 ? <p>No new adverts found.</p> : (
        <div className="car-list">
          {cars.map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AdvertsPage;
