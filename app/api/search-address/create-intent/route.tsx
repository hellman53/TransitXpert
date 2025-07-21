import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    typescript: true,
    apiVersion: "2023-10-16"
});

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const amount = data.amount;

        if (!amount || isNaN(amount) || amount <= 0) {
            return NextResponse.json(
                { error: "Invalid amount" },
                { status: 400 }
            );
        }
        const paymentIntent = await stripe.paymentIntents.create({
            amount: Number(amount) * 100, 
            currency: 'INR',
        });

       
        return NextResponse.json({ client_secret: paymentIntent.client_secret }, { status: 200 });
    } catch (error) {
        console.error("Error creating payment intent:", error); 
        return NextResponse.json(
            { error: "Failed to create payment intent" },
            { status: 500 } 
        );
    }
}
