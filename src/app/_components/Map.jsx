'use client'

// const Map = ({ location, height }) => {
//   const mapContainerStyle = {
//     width: '100%',
//     height: height || '400px',
//   };

//   const center = {
//     lat: location.lat,
//     lng: location.lng,
//   };

//   return (
//     <LoadScript 
//     loadingElement={<div style={{ height: '100%' }} />}
//     googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
//     onLoad={() => console.log('Google Maps loaded successfully')}

//     >
//       <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={15}>
//         <Marker position={center} />
//       </GoogleMap>
//     </LoadScript>
//   );
// };

import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';





function Maps({height, location}) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  })

  const containerStyle = {
    width: '100%',
    height: height || '400px',
  };
  
  const center = {
        lat: location.lat,
        lng: location.lng,
      };
  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={2}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
         <Marker position={center} />
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(Maps)