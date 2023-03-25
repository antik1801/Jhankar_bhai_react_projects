import React from 'react';

const Cosmetic = (props) => {
    const {name, price, id} = props?.cosmetic;
    const addToCard = (id) =>{
        console.log(`Item added`,id);
    }
    const addToCardWithParam = () => addToCard(id);
    return (
        <div style={{border:'2px solid salmon', margin: '20px', borderRadius: '15px', padding: '15px'}}>
            <h1>By this: {name}</h1>
            <p>Only for: {price}</p>
            <p><small>Price id is: {id}</small></p>
            <button onClick={addToCardWithParam}>Add to card</button>
        </div>
    );
};

export default Cosmetic;