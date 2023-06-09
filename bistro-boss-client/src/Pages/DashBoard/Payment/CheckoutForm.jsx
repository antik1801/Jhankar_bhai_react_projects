import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
// import "./CheckoutForm.css"

const CheckoutForm = ({ price , cart}) => {
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    console.log(price);
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        setClientSecret(res.data.clientSecret);
      });      
    }
  }, [price, axiosSecure]);
  const handleSubmit = async (event) => {
    // Block native refresh
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
    } else {
      // console.log("Payment methods", paymentMethod);
      setCardError(" ");
    }
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "unknown",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    }
    console.log("Payment intents", paymentIntent);
    setProcessing(false);

    if ((paymentIntent.status = "succeeded")) {
      const transactionId = paymentIntent.id;
      setTransactionId(paymentIntent.id);
      // save payment information to the server
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        quantity: cart?.length,
        orderStatus: 'service pending',
        cartItems: cart.map(item => item._id),
        menuItems: cart.map(item => item.menuItemId),
        itemNames: cart?.map(item => item.name),
      };
      axiosSecure.post('/payments', payment)
      .then(res => {
        console.log(res.data)
        if (res.data.insertResult.insertedId) {
           Swal.fire(
          "Congratulations!",
          `Successfully done payment!`,
          "success"
        );
        navigate('/dashboard/mycart')
        }
      })
      
    }
  };

  return (
    <>
      <form className="w-2/3 m-8 " onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          className="btn btn-primary btn-sm mt-4 "
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600 ml-4">{cardError}</p>}
      {/* {txnId && <p className="text-green-400 ml-4 text-3xl font-bold">Transaction complete with transaction id {setTransactionId}</p> } */}
    </>
  );
};

export default CheckoutForm;
