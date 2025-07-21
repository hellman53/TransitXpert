'use client';
import React, { useState } from 'react';
import Booking from '@/components/Booking/Booking';
import MapBox from '@/components/Map/MapBox'; 
import { SourceContext } from '@/context/SourceContext';
import { DestinationContext } from '@/context/DestinationContext';
import { LoadScript } from '@react-google-maps/api';

export default function Home() {
    const [source, setSource] = useState(null); 
    const [destination, setDestination] = useState(null); 

    return (
        <SourceContext.Provider value={{ source, setSource }}> 
            <DestinationContext.Provider value={{ destination, setDestination }}> 
                <LoadScript
                libraries={['places']}
                googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}>
                <div className='p-6 grid grid-cols-1 md:grid-cols-3 gap-5'>
                    <div>
                        <Booking />
                    </div>
                    <div className='col-span-2'>
                        <MapBox />
                    </div>
                </div>
                </LoadScript>
            </DestinationContext.Provider>
        </SourceContext.Provider>
    );
}
