import React from 'react';
import "./assets/styles/App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CarDetailsPage from './pages/CarDetailsPage';
import AddAdvertPage from './pages/AddAdvertPage';
import AdvertsPage from './pages/AdvertsPage';
import FavoritesPage from './pages/FavoritesPage';

const App = () => {
  return (
    <Router>
      <div className="app" >
        <Navbar />
        <div className="content">
          <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
            <Route path="/car-details/:carId" element={<CarDetailsPage />} />
            <Route path="/add-advert" element={<AddAdvertPage />} />
            <Route path="/myadverts" element={<AdvertsPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </div>

      </div>
    </Router>
  );
};

export default App;