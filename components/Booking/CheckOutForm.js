import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useRouter } from 'next/navigation';
import React from 'react'

function CheckOutForm({ amount }) { 
    const stripe = useStripe();
    const elements = useElements();
    const route = useRouter();


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (elements == null) {
            return;
        }
        const res = await fetch('/api/search-address/create-intent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                amount: amount,
            }),
        });
        if (!res.ok) {
            console.error('Failed to create payment intent:', res.statusText);
            return; 
        }
    
        const { clientSecret } = await res.json(); 
    
       
        if (!clientSecret) {
            console.error('Client secret is missing');
            return;
        }
    
        console.log('Client Secret:', clientSecret);
    
        const { error } = await stripe.confirmPayment({
            clientSecret: clientSecret,
            elements,
            confirmParams: {
                return_url: "/",
            }
        });
    
        if (!error) {
            route.push({
                pathname: '/confirmation',
                query: {
                    amount: (amount / 100).toFixed(2), 
                },
            });
        } else {
            console.error("Payment failed:", error);
        }
    };
    

    return (
        <div className='flex flex-col justify-center items-center w-full mt-6'>
            <h2 className='m-5 font-bold'>Amount to Pay : ₹{amount}</h2> 
            <form onSubmit={handleSubmit} className='max-w-md'>
                <PaymentElement />
                <button className='w-full bg-yellow-400 text-black p-2 rounded-lg mt-2' type="submit" onClick={()=>route.push(`/confirmation?amount=${amount}`)} >
                    Pay
                </button>
            </form>
        </div>
    );
}

export default CheckOutForm;

// card number for the testing purpose
// Visa: 4242 4242 4242 4242

// Mastercard: 5555 5555 5555 4444

// American Express: 3782 822463 10005

// Visa: 	        4242424242424242	Any 3 digits	Any future date
// Visa (debit):	4000056655665556	Any 3 digits	Any future date
// Mastercard:   	5555555555554444	Any 3 digits	Any future date
// Mastercard (2-series):	2223003122003222	Any 3 digits	Any future date
// Mastercard (debit)	5200828282828210	Any 3 digits	Any future date
// Mastercard (prepaid)	5105105105105100	Any 3 digits	Any future date
// American Express	378282246310005	Any 4 digits	Any future date
// American Express	371449635398431	Any 4 digits	Any future date
// Discover	6011111111111117	Any 3 digits	Any future date
// Discover	6011000990139424	Any 3 digits	Any future date
// Discover (debit)	6011981111111113	Any 3 digits	Any future date
// Diners Club	3056930009020004	Any 3 digits	Any future date
// Diners Club (14-digit card)	36227206271667	Any 3 digits	Any future date
// BCcard and DinaCard	6555900000604105	Any 3 digits	Any future date
// JCB	3566002020360505	Any 3 digits	Any future date
// UnionPay	6200000000000005	Any 3 digits	Any future date
// UnionPay (debit)	6200000000000047	Any 3 digits	Any future date
// UnionPay (19-digit card)	6205500000000000004	Any 3 digits	Any future date
