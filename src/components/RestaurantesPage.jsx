import React, { useState } from 'react';
import FiltradoRestaurantes from '../components/FiltradoRestaurantes';
import GoogleMapsComponent from '../components/GoogleMapsComponent';
import '../styles/RestaurantesPage.css';

const RestaurantesPage = () => {
  const [restaurantes, setRestaurantes] = useState([]);

  return (
    <div className="restaurantes-page">
      <div className="sidebar">
        <h2>Filtrar Restaurantes</h2>
        <FiltradoRestaurantes setRestaurantes={setRestaurantes} />
      </div>
      <div className="map-container">
        <GoogleMapsComponent restaurantes={restaurantes} />
      </div>
    </div>
  );
};

export default RestaurantesPage;