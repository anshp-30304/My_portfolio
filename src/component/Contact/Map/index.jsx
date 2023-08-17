import React from 'react';
import { MapContainer, TileLayer, Polygon , Tooltip  } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  // Define the geoJSON data for the square around Ahmedabad
  const coordinates = [
    [23.024705, 72.581660], // top left
    [22.979266, 72.580834], // bottom left
    [22.980441, 72.648984], // bottom right
    [23.039692, 72.667824], // top right
  ];


  const tooltipStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    border: '1px solid #333',
    borderRadius: '5px',
    padding: '5px',
    fontSize: '12px',
    fontWeight: 'bold',
  };


  return (
    <MapContainer center={[23.009979, 72.624242]} zoom={12}>
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    <Polygon positions={coordinates} pathOptions={{ fillColor: 'blue', weight: 2, opacity: 1 }} >
    <Tooltip>
    <span style={tooltipStyle}>I live inside this area</span>
    </Tooltip>
    </Polygon>
  </MapContainer>
  );
};

export default Map;
