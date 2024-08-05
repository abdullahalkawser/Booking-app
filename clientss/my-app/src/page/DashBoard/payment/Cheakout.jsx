// Checkout.js
import React, { useContext, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../provider/Provider';

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const [errr, setErrr] = useState('');
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      setErrr(error.message);
      console.log('[error]', error);
    } else {
      setErrr('');
      console.log('[PaymentMethod]', paymentMethod);

      // Here you can handle the successful payment
      // For example, submit the payment details to your server
      // and show a success message to the user
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='bg-blue-600 my-3 btn text-white' type="submit" disabled={!stripe}>
          Pay
        </button>
        <p className='text-red-700'>{errr}</p>
      </form>
    </div>
  );
};

export default Checkout;
