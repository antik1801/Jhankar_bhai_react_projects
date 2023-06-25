
import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js';
import "./CheckoutForm.css"
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';

const CheckoutForm = ({closeModal, totalPrice}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError,setCardError]=useState()
    const {user} = useAuth()
  
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
      const card = elements.getElement(CardElement);
      


      if (card == null) {
        return;
      }
  
      // Use your card Element with other Stripe.js APIs
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
  
      if (error) {
        console.log('[error]', error);
        setCardError(error.message)
      } else {
        console.log('[PaymentMethod]', paymentMethod);
      }
      // confirm payment
      stripe
  .confirmCardPayment('{PAYMENT_INTENT_CLIENT_SECRET}', {
    payment_method: {
      card: card,
      billing_details: {
        name: user?.displayName ||  "user",
        email: user?.email || "user@gmail.com",
      },
    },
  })
  .then(function(result) {
    // Handle result.error or result.paymentIntent
  });
    };
  
    return (
      <>
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
        <div className="flex mt-2 justify-around">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit" disabled={!stripe}
                    className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                  >
                    Pay {totalPrice}$
                  </button>
                </div>
      </form>
      {cardError && <p className='text-red-500'>{cardError}</p> }
      </>
    );
  }
export default CheckoutForm