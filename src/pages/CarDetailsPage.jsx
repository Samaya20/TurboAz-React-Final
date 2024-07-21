import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCarById } from "../utils/api";
import "../assets/styles/CarDetailsPage.css";

const CarDetailsPage = () => {
  const { carId } = useParams();
  const [car, setCar] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCarDetails = async () => {
      try {
        const data = await fetchCarById(carId);
        setCar(data);
      } catch (err) {
        setError("Error fetching car details");
      }
    };

    getCarDetails();
  }, [carId]);

  if (error) return <div>{error}</div>;
  if (!car) return <div>Loading...</div>;

  return (
    <>
      <h1 className="details">Details</h1>
      <div className="car-details">
        <img src={car.images[0]} alt={`${car.make} ${car.model}`} />
        <div className="info">
          <p>
            <strong>Make: </strong> {car.make}
          </p>
          <p>
            <strong>Model: </strong> {car.model}
          </p>
          <p>
            <strong>Year: </strong> {car.year}
          </p>
          <p>
            <strong>Color: </strong> {car.color}
          </p>
          <p>
            <strong>Price: </strong> {car.price} $
          </p>
        </div>
      </div>
    </>
  );
};

export default CarDetailsPage;
