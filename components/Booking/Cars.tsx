'use client';
import CarsList from '@/app/Data/CarsList';
import React, { useState } from 'react';
import Image from 'next/image';
import Cards from './Cards';
import { useRouter } from 'next/navigation';

function Cars({ distance }) {
    const [selectedCar, setSelectedCar] = useState(null); 
    const [active, setActive] = useState(null);
    const router = useRouter();

    return (
        <div className='mt-3'>
            <h2 className='font-semibold'>Select Car</h2>
            <div className='grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3'>
                {CarsList.map((item, index) => (
                    <div key={index} className={`m-2 p-2 border-[1px] rounded-md hover:border-yellow-400 cursor-pointer
                    ${index === selectedCar ? 'border-yellow-400 border-[2px]' : ''}`}
                        onClick={() => { setSelectedCar(index); setActive(item); }}>
                        <Image src={item.image}
                            alt={item.name}
                            width={75}
                            height={90}
                            className='w-full' />
                        <h2 className='text-[12px] text-gray-500'>{item.name}
                            <span className='float-right font-medium text-black'>₹{(item.charges * distance).toFixed(2)}</span></h2>
                    </div>
                ))}
            </div>
            {selectedCar !== null && ( 
                <>
                    <Cards />
                    <button className='w-full bg-yellow-400 p-1 rounded-md mt-4'
                    onClick={()=>router.push(`/payment?amount=${(CarsList[selectedCar].charges * distance).toFixed(2)}`)}

                    >
                        Book {CarsList[selectedCar].name} 
                    </button>
                </>
            )}
        </div>
    );
}

export default Cars;
