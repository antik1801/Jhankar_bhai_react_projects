import React from "react";

const Home = (props) => {
  const { player, handleBuyNow } = props;
  const {_id,  picture, name, age, gender,balance } = player;
//   console.log(player);
  return (
        <div className="col">
          <div className="card h-100">
            <img src={picture} className="card-img-top" alt="..." />
            <div className="card-body">
              <h2 className="card-title">{name}</h2>
              <p className="card-text">Age : {age}</p>
              <p>Price: $ {balance}</p>
              <p>Gender: {gender}</p>
            </div>
            <button onClick={()=>handleBuyNow(player)} className="btn btn-info">Buy now</button>
          </div>
        </div>
  );
};

export default Home;
