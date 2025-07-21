
import React, { useContext, useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { useEffect } from 'react';
import { SourceContext } from '@/context/SourceContext';
import { DestinationContext } from '@/context/DestinationContext';

function InputItem({ type } : { type: string }){
    const [value, setValue] = useState(null);
    const [placeHolder, setPlaceHolder] = useState(null);

    const {source, setSource} = useContext(SourceContext);
    const {destination, setDestination} = useContext(DestinationContext);


    useEffect(()=>{
        type == 'source'?setPlaceHolder('Pickup Location'):setPlaceHolder("Destination Location")
    },[])

    const getLatAndLong=(place:any, type)=>{
          const placeId = place.value.place_id;
          const service = new google.maps.places.PlacesService(document.createElement('div'));
          service.getDetails({placeId}, (place,status)=>{
            if(status === 'OK' && place?.geometry && place.geometry.location){
                if (type == 'source') {
                    setSource({
                      lat: place.geometry.location.lat(),
                      lng: place.geometry.location.lng(),
                      name: place.formatted_address,
                      label: place.name
                    });
                    
                }
                else {
                    setDestination({
                      lat: place.geometry.location.lat(),
                      lng: place.geometry.location.lng(),
                      name: place.formatted_address,
                      label: place.name
                    });
                    
                  }
            
            }
          })
    }

    return (
        <div className='mt-3'>
            <label className='text-gray-400'>
                {type === 'source' ? 'Where From?' : 'Where To?'}
            </label>
            <GooglePlacesAutocomplete
               
                selectProps={{
                    value,
                    onChange: (place)=>{getLatAndLong(place, type);setValue(place)},
                    placeholder: placeHolder,
                    isClearable: true,
                    components: {
                        DropdownIndicator: null, 
                    },
                }}
            />
        </div>
    );
}

export default InputItem;
