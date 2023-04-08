import React, { useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loader from '../Loader/Loader';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import "./Home.css"
import toast from 'react-hot-toast';
const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);
    const handleAddToCart = tshirt =>{
        const exist = cart.find(ts => ts?._id === tshirt._id)
        if (exist) {
            toast("You have already added this t shirt")
        }
        else{
            const newCart = [...cart, tshirt];
            setCart(newCart);
        }
    }
    const handleRemoveFromCart = id =>{
        const remaining = cart.filter(tShirt=> tShirt._id !== id);
        if(remaining){

        }
        setCart(remaining);
    }
    return (
        <div className='home-container'>
          <div className='t-shirts-container'> {
                tshirts.map(tshirt=> <Tshirt tshirt={tshirt} key={tshirt._id} handleAddToCart={handleAddToCart}></Tshirt>)
            } </div>
            <div className="cart-container">
                <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            </div>
        </div>
    );
};

export default Home;