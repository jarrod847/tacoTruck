import React from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { mapData, truckData } from './mapData';
import LocationAtom from '../../recoil/atoms/locationAtom';
import { useRecoilValue } from 'recoil';

const containerStyle = {
  width: '60vw',
  height: '50vh'
};



function Map() {
  const location = useRecoilValue(LocationAtom)
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_MAP_KEY
  })

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{lat: location.latitude, lng: location.longitude}}
        zoom={16}
      >
          {truckData.map((info) => (<Marker position={{lat: info.latitude, lng: info.longitude}} icon={{url: "/taco.png", scaledSize: new window.google.maps.Size(30,30), origin: new window.google.maps.Point(0,0), anchor: new window.google.maps.Point(15,15) }}/>))}
      </GoogleMap>
  ) : <></>
}

export default Map