import React from 'react';
import CarList from "../components/CarList";
import FilterBar from '../components/FilterBar';
import "../assets/styles/HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <FilterBar/>
      <CarList/>
    </div>
  );
};

export default HomePage;
