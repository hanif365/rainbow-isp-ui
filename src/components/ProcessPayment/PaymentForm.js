import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './PaymentForm.css'
import { Link } from 'react-router-dom';

const PaymentForm = ({handlePayment}) => {
    const stripe = useStripe();
    const elements = useElements();

    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardElement);

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            console.log('[error]', error);
            setPaymentError(error.message);
            setPaymentSuccess(null);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            // setPaymentSuccess(paymentMethod.id);
            setPaymentSuccess(paymentMethod);
            setPaymentError(null);
            // handlePayment(paymentMethod.id)
            handlePayment(paymentMethod)
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="payment-form">
                <CardElement />
                <button type="submit" disabled={!stripe} className="my-5 w-75 btn btn-info">
                    Pay
                </button>
            </form>
            {
                paymentError && <p style={{ color: 'red' }}>{paymentError}</p>
            }

            {
                paymentSuccess && <p style={{ color: 'green' }}>Your Payment Successfully Done</p>
            }
        </div>
    );
};

export default PaymentForm;