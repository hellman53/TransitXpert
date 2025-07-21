'use client'
import React from 'react'
import HomeNavbar from './HomeNavBar'
import Banner from './banner'
import CarVideoSection from './CarVideoSection'
import Footer from './Footer'

const page = () => {
  return (
    <div>
       
        <Banner/>
        <CarVideoSection/>
        <Footer/>
    </div>
  )
}

export default page