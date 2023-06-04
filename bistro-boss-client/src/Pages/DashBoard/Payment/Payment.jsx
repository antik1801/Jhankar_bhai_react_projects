
import { loadStripe } from '@stripe/stripe-js';
import SectionTitle from '../../../components/SectionTitle';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';

const stripPromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)

const Payment = () =>{
 return (
<div className='mt-10'>
    <SectionTitle heading="Payment" subheading="Please process to"></SectionTitle>
    <h2 className="text-3xl">Teka o taka tumi uira uira aso.......</h2>
    <Elements stripe={stripPromise}>
    <CheckoutForm />
    </Elements>
</div>
 )

}

export default Payment;