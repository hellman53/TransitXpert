import React, { useContext, useEffect, useState, useCallback } from 'react';
import { DirectionsRenderer, GoogleMap, MarkerF, OverlayViewF } from '@react-google-maps/api';
import { SourceContext } from '@/context/SourceContext';
import { DestinationContext } from '@/context/DestinationContext';

function MapBox() {
  const { source } = useContext(SourceContext); 
  const { destination } = useContext(DestinationContext); 

  const containerStyle = {
    width: '100%',
    height: '100%',
    position: 'relative',
  };

  const [map, setMap] = useState(null);
  const [directionRoutePoints, setDirectionsRoutePoints] = useState(null);

  useEffect(() => {
    if (source && source.lat && source.lng && destination && destination.lat && destination.lng) {
      directionRoute(); 
    }
  }, [source, destination]); 
  const directionRoute = () => {
    const DirectionsService = new window.google.maps.DirectionsService();

    DirectionsService.route({
      origin: { lat: source.lat, lng: source.lng },
      destination: { lat: destination.lat, lng: destination.lng },
      travelMode: window.google.maps.TravelMode.DRIVING, 
    }, (result, status) => {
      if (status === window.google.maps.DirectionsStatus.OK) {
        setDirectionsRoutePoints(result);
      } else {
        console.error("Error fetching directions", status);
      }
    });
  };

  const onLoad = useCallback((map) => {
    setMap(map);
    if (source && source.lat && source.lng) {
      map.panTo({ lat: source.lat, lng: source.lng }); 
    }
  }, [source]);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={source && source.lat && source.lng ? { lat: source.lat, lng: source.lng } : { lat: -3.745, lng: -38.523 }} // Center on source or default
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {source && source.lat && source.lng && (
        <MarkerF position={{ lat: source.lat, lng: source.lng }}>
          <OverlayViewF position={{ lat: source.lat, lng: source.lng }} mapPaneName={OverlayViewF.OVERLAY_MOUSE_TARGET}>
            <div className='p-2 bg-white font-bold inline-block'>
              <p className='text-black text-[16px]'>{source.label}</p>
            </div>
          </OverlayViewF>
        </MarkerF>
      )}
      {destination && destination.lat && destination.lng && (
        <MarkerF position={{ lat: destination.lat, lng: destination.lng }}>
          <OverlayViewF position={{ lat: destination.lat, lng: destination.lng }} mapPaneName={OverlayViewF.OVERLAY_MOUSE_TARGET}>
            <div className='p-2 bg-white font-bold inline-block'>
              <p className='text-black text-[16px]'>{destination.label}</p>
            </div>
          </OverlayViewF>
        </MarkerF>
      )}
      {directionRoutePoints && (
        <DirectionsRenderer
          directions={directionRoutePoints}
          options={{
            suppressMarkers: true, 
          }}
        />
      )}
    </GoogleMap>
  );
}

export default MapBox;
