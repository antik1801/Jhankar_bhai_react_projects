import React from 'react';
import { addToDb, removeFromDb } from '../../utilities/fakedb';

const Cosmetic = (props) => {
    const {name, price, id} = props?.cosmetic;
    const addToCard = id =>addToDb(id);
    const removeFromCart = id => removeFromDb(id);
    return (
        <div style={{border:'2px solid salmon', margin: '20px', borderRadius: '15px', padding: '15px'}}>
            <h1>By this: {name}</h1>
            <p>Only for: {price}</p>
            <p><small>Price id is: {id}</small></p>
            <button onClick={() => addToCard(id)}>Add to card</button>
            {/* <button onClick={() => addToCard(id)}>Purchase</button> */}
            <button onClick={()=>removeFromCart(id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;