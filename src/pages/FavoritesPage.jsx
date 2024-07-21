import React, { useEffect, useState } from 'react';
import { fetchCars } from '../utils/api';
import CarCard from '../components/CarCard';
import "../assets/styles/FavoritesPage.css";

const FavoritesPage = () => {
  const [favoriteCars, setFavoriteCars] = useState([]);

  useEffect(() => {
    const getFavoriteCars = async () => {
      try {
        const allCars = await fetchCars(); 
        const favoriteIds = JSON.parse(localStorage.getItem("favoriteCarIds")) || [];
        const favoriteCarsList = allCars.filter(car => favoriteIds.includes(car.id));
        setFavoriteCars(favoriteCarsList);
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    };

    getFavoriteCars();
  }, []);

  return (
    <div className="favorites-page">
      <h1>My Favorites</h1>
      <div className="car-list">
        {favoriteCars.map(car => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
