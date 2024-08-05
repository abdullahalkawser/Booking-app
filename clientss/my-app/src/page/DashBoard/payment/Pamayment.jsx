// Payments.js
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Checkout from './Cheakout';


const stripePromise = loadStripe('pk_test_51OptiBGH41gt1tTCsBfasVJRiHPKhmPRUxJMq8Ead0Anxu4G1jhi4T83Tiig2G9cQ9HtFhOdkv4Mp5B71qzLXtLB00qkiGFaCu');

const Payments = () => {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <Checkout />
      </Elements>
    </div>
  );
};

export default Payments;
