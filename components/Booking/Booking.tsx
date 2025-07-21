import React from 'react'
import AutoCompleteAddress from './AutoCompleteAddress'
import Cars from './Cars';
import Cards from './Cards';

function Booking() {
  const screenHeight = typeof window !== 'undefined' ? window.innerHeight : '80vh'; 
  return (
    <div className='p-5'>
      <h2 className=' text-[20px] font-semibold '>Booking</h2>
      <div className='border-[1px] p-5 rounded-md' style={{height:screenHeight}}>
      <AutoCompleteAddress/> 
     </div>
    </div>
  )
}

export default Booking