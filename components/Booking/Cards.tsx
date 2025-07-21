'use client'
import CardsList from '@/app/Data/CardsList'
import React, { useState } from 'react'
import Image from 'next/image'

function Cards() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null); 

    return (
        <div>
            <h2 className='text-[14px] font-medium'>Payment methods</h2>
            <div className='grid grid-cols-5 mt-2 pl-2'>
                {CardsList.map((item, index) => (
                    <div 
                        key={item.id} 
                        className={`w-[50px] border-[1px] flex items-center 
                                    justify-center 
                                    rounded-md
                                    cursor-pointer
                                    hover:border-yellow-400 
                                    hover:scale-110 transition-all
                                    ${activeIndex === index ? 'border-yellow-400 border-[2px]' : ''}`}
                        onClick={() => setActiveIndex(index)}
                    >
                        <Image 
                            src={item.image}
                            alt={item.name}
                            height={50}
                            width={30}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cards;

