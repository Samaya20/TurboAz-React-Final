import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addCar } from "../utils/api";
import "../assets/styles/AddAdvertPage.css";

const AddAdvertPage = () => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newCar = {
      make,
      model,
      year,
      color,
      price,
      images: [image],
    };

    try {
      const response = await addCar(newCar);
      const newCarId = response.data.id;

      const existingIds = JSON.parse(localStorage.getItem("carIds")) || [];
      localStorage.setItem(
        "carIds",
        JSON.stringify([...existingIds, newCarId])
      );

      navigate("/myadverts");
    } catch (error) {
      console.error("Error adding new car:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="add-advert-form">
        <label>
          Make
          <input
            type="text"
            value={make}
            onChange={(e) => setMake(e.target.value)}
          />
        </label>
        <label>
          Model
          <input
            type="text"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />
        </label>
        <label>
          Year
          <input
            type="text"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </label>
        <label>
          Color
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </label>
        <label>
          Price
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <label>
          Image URL
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <span>
            https://turbo.azstatic.com/uploads/f660x496/2023%2F11%2F05%2F18%2F09%2F22%2F4ebebadc-66d7-4372-bc13-479c4817f26a%2F3815_EVRmwPRvT-t2ad98DQwJZQ.jpg
          </span>
        </label>
        <button type="submit">Add Advert</button>
      </form>
    </div>
  );
};

export default AddAdvertPage;
