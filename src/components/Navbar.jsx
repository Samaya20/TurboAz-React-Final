import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles/Navbar.css";
import { CiCirclePlus } from "react-icons/ci";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1>Turbo.az</h1>
        <ul>
          <li>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/myadverts" className="nav-link">
              Adverts
            </NavLink>
          </li>
          <li>
            <NavLink to="/favorites" className="nav-link">
              Favorites
            </NavLink>
          </li>
        </ul>
        <button className="new-advert-btn">
          <NavLink to="/add-advert">
            {" "}
            New <CiCirclePlus />
          </NavLink>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
