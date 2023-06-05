
import { loadStripe } from '@stripe/stripe-js';
import SectionTitle from '../../../components/SectionTitle';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import useCart from '../../../hooks/useCart';

const stripPromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)

const Payment = () =>{
    const [cart] = useCart(); 
    // console.log(cart)
    const total = cart.reduce((sum,item)=>sum+item.price, 0)
    const price = parseFloat(total.toFixed(2))
 return (
<div className='mt-10'>
    <SectionTitle heading="Payment" subheading="Please process to"></SectionTitle>
    <h2 className="text-3xl">Teka o taka tumi uira uira aso.......</h2>
    <Elements stripe={stripPromise}>
    <CheckoutForm price={price} cart={cart}/>
    </Elements>
</div>
 )

}

export default Payment;