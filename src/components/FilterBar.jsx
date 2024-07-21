import React from "react";
import { useDispatch } from "react-redux";
import { setFilters } from "../features/filterSlice";
import "../assets/styles/FilterBar.css";
import { IoMdClose } from "react-icons/io";

const FilterBar = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(setFilters({
      [e.target.name]: e.target.value
    }));
  };

  const handleReset = () => {
    dispatch(setFilters({
      make: "",
      model: "",
      year: "",
      minPrice: "",
      maxPrice: ""
    }));
  };

  return (
    <div className="filter-bar">
      <label className="filter-label">
        Make
        <input type="text" name="make" onChange={handleFilterChange} />
      </label>
      <label className="filter-label">
        Model
        <input type="text" name="model" onChange={handleFilterChange} />
      </label>
      <label className="filter-label">
        Year
        <input type="text" name="year" onChange={handleFilterChange} />
      </label>
      <label className="filter-label">
        Min Price
        <input type="text" name="minPrice" onChange={handleFilterChange} />
      </label>
      <label className="filter-label">
        Max Price
        <input type="text" name="maxPrice" onChange={handleFilterChange} />
      </label>
      <button className="resetBtn" onClick={handleReset}><IoMdClose /> Reset</button>
    </div>
  );
};

export default FilterBar;
