import React from "react";
import { Link } from "react-router-dom";

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
            <div className="d-flex gap-3">
            <button onClick={()=>handleBuyNow(player)} className="btn btn-info">Buy now</button>
            <Link to={`/singlePlayer/${_id}`}> <button className="btn btn-warning"> ReadMore</button> </Link>
            </div>
          </div>
        </div>
  );
};

export default Home;
