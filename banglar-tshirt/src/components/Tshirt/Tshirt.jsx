import React from 'react';
import "./Tshirt.css"
const Tshirt = ({tshirt,handleAddToCart}) => {
    // console.log(tshirt);
    const {picture,price,_id,name} = tshirt
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <button onClick={()=>handleAddToCart(tshirt)}>buy now</button>
        </div>
    );
};

export default Tshirt;