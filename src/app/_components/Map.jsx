'use client'
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ location, height }) => {
  const mapContainerStyle = {
    width: '100%',
    height: height || '400px',
  };

  const center = {
    lat: location.lat,
    lng: location.lng,
  };

  return (
    <LoadScript 
    loadingElement={<div style={{ height: '100%' }} />}
    googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
    onLoad={() => console.log('Google Maps loaded successfully')}

    >
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={15}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;