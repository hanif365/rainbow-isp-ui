import React from 'react';
import './ProcessPayment.css'

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';

const stripePromise = loadStripe('pk_test_51IfjKECzybADR7gVQANNFJ9TqhQZg1PciaGp1aOMhpMZ1BBCTg1zup9LmzHIxEzpdIOK4PpCP2SAKcHnxgKjcuJ000GkLKmZX7');


const ProcessPayment = ({handlePayment}) => {
    return (
        <div className="container">
            <Elements stripe={stripePromise}>
                <PaymentForm handlePayment={handlePayment}></PaymentForm>
            </Elements>
        </div>
    );
};

export default ProcessPayment;