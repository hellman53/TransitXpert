'use client'
import { useSearchParams } from 'next/navigation'
import React from 'react'
import {loadStripe} from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './../../components/Booking/CheckOutForm'

function Payment() {
  const searchParam = useSearchParams();
  const amount = searchParam.get('amount')
   console.log(amount)
 
   const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHER_KEY)

  const options = {
    mode: 'payment',
    amount:Math.round(amount*100), 
    currency:'inr'
  }
  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckOutForm amount={amount}/>
    </Elements>
  )
}
export default Payment




















