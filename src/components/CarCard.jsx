import React from "react";
import { useDispatch } from "react-redux";
import "../assets/styles/CarCard.css";
import { CiHeart } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const CarCard = ({ car }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/car-details/${car.id}`);
  };

  const handleAddToFavorites = () => {
    const existingFavorites = JSON.parse(localStorage.getItem("favoriteCarIds")) || [];
    if (!existingFavorites.includes(car.id)) {
      localStorage.setItem("favoriteCarIds", JSON.stringify([...existingFavorites, car.id]));
    }
  };

  return (
    <div className="car-card">
      <img src={car.images[0]} alt="carimage"  onClick={handleClick}/>
      <div className="wrapper">
        <div className="info">
          <h2>
            {car.make} {car.model}
          </h2>
          <p>Year: {car.year}</p>
          <p>Price: {car.price}</p>
        </div>
        <button className="add-favorites" onClick={handleAddToFavorites}>
          <CiHeart />
        </button>
      </div>
    </div>
  );
};

export default CarCard;