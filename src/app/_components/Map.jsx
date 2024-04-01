'use client'

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

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
         <Marker position={center} />
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(Maps)