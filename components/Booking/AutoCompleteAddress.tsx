'use client';
import React, { useEffect, useState, useContext } from 'react';
import InputItem from './InputItem';
import { SourceContext } from '@/context/SourceContext';
import { DestinationContext } from '@/context/DestinationContext';
import Cars from './Cars';

function AutoCompleteAddress() {
    const { source, setSource } = useContext(SourceContext);
    const { destination, setDestination } = useContext(DestinationContext);
    const [distance, setDistance] = useState(null); 

    const calculateDistance = () => {
        if (source && destination) {
            const distance = google.maps.geometry.spherical.computeDistanceBetween(
                new google.maps.LatLng(source.lat, source.lng),
                new google.maps.LatLng(destination.lat, destination.lng)
            );
            setDistance(distance * 0.000621374); 
        }
    };

    useEffect(() => {
        if (source) {
            console.log(source);
        }
        if (destination) {
            console.log(destination);
        }
    }, [source, destination]);

    return (
        <div>
        <div className='mt-5'>
            <InputItem type="source" />
            <InputItem type="destination" /> 
            <button className='w-full bg-yellow-400 p-1 rounded-md mt-4' onClick={calculateDistance}>
                Search
            </button>
            {distance !== null && (
                <p className='mt-4'>Distance: {distance.toFixed(2)} miles</p>
            )}
        </div>
        {distance?<Cars distance={distance}/>:null}
        </div>
    );
}

export default AutoCompleteAddress;
