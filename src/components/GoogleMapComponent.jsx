import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import '../styles/GoogleMapsComponent.css';

const GoogleMapsComponent = ({ restaurantes }) => {
  const containerStyle = {
    width: '100%',
    height: '600px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  };

  const center = {
    lat: -12.0464,
    lng: -77.0428,
  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
      >
        {restaurantes.map((restaurante) => (
          <Marker
            key={restaurante.id}
            position={{ lat: restaurante.latitud, lng: restaurante.longitud }}
            title={restaurante.nombre}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapsComponent;