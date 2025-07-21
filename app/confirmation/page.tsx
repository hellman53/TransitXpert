'use client';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Style from '@mui/icons-material/Style';
import Driver from '../Data/Driver';

export default function PaymentConfirmation() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [amount, setAmount] = useState('');
    const [randomDriver, setRandomDriver] = useState(null);

    useEffect(() => {
        const amountFromParams = searchParams.get('amount');
        console.log("amount from param :", amountFromParams);
        if (amountFromParams) {
            setAmount(amountFromParams); 
        }

        const index = Math.floor(Math.random() * Driver.length);
        setRandomDriver(Driver[index]);
    }, [searchParams]);

    const handleBackToHome = () => {
        router.push('/home');
    };

    return (

        <div style={styles.container}>       
        <div style={styles.card}>
            <h2 style={styles.successTitle}>Payment Successful 🎉</h2>
            <p style={styles.message}>Thank you for your payment of ₹{amount}. Your transaction has been successfully processed!</p>

            <div style={styles.detailsContainer}>
                <h2 style={styles.detail}><strong>Transaction Details: </strong></h2>
                <p style={styles.detail}><strong>Amount Paid: </strong> ₹{amount}</p>
                <p style={styles.detail}><strong>Transaction ID: </strong> TXN123456789</p>
                <h2 style={styles.detail}><strong>Your Driver Information: </strong></h2>

                {randomDriver && (
                    <>
                        <p style={styles.detail}><strong>Assigned Driver: </strong>{randomDriver.name}</p>
                        <p style={styles.detail}><strong>Driver's Mobile Number: </strong>{randomDriver.mobile}</p>
                        <p style={styles.detail}><strong>OTP: </strong>{Math.round(Math.random() * 1000000 + 1)}</p>
                        <p style={styles.message}>If you have any questions or need further assistance, feel free to contact our support team.</p>
                        <p style={styles.message}>We appreciate your trust in us, and we wish you a pleasant journey with {randomDriver.name}!</p>
                    </>
                )}
            </div>
                <button style={styles.button} onClick={handleBackToHome}>
                    Back to Home
                </button>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f4f4f9',
    },
    card: {
        backgroundColor: '#fff',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
        width: '100%',
        textAlign: 'center',
    },
    successTitle: {
        fontSize: '24px',
        color: '#28a745',
        marginBottom: '20px',
    },
    message: {
        fontSize: '16px',
        color: '#555',
        marginBottom: '30px',
    },
    detailsContainer: {
        marginBottom: '30px',
        textAlign: 'left',
    },
    detail: {
        fontSize: '16px',
        color: '#333',
        marginBottom: '10px',
    },
    button: {
        backgroundColor: '#007bff',
        color: '#fff',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        width: '100%',
    },
};
