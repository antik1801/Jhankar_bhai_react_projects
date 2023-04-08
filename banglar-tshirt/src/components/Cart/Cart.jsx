import React from "react";
import Tshirt from "../Tshirt/Tshirt";
import "./Cart.css"

const Cart = ({ cart, handleRemoveFromCart }) => {
  // console.log(cart)
    let message;
  if(cart.length === 0){
    message = <p>Kire ? kinbina kisu foinni.</p>
  }
  else{
    message = <p>Aro add kor!</p>
  }

  return (
    <div>
      <h2 className={cart.length === 1 ? `blue` : `red`}>Order summary: {cart.length}</h2>
      <p className={`bold bordered ${cart.length ===3 ? 'yellow' : 'purple'}`}>SomeThing</p>
      {
        cart.length > 2 ? <span className="purple">Aro Kino.</span> : <span>Gorib,chesra, bosti</span>
      }
      {message}
      {cart.map((ts) => (
        <div key={ts._id}>
          <p >
            {ts.name}{" "}
            <button onClick={() => handleRemoveFromCart(ts._id)}>X</button>
          </p>
        </div>
      ))}
      {
        cart.length === 2 && <p>Double bonanja</p>
      }
      {
        cart.length === 3 || <p>Tinta to holo na</p>
      }
    </div>
  );
};

// CONDITIONAL RENDERING
// 1. use if else to set a variable that will contain an element
// 2. tarnary: condition ? 'true' : 'false'
// 3. Logical &&: 
// 4. Logial || 

export default Cart;
