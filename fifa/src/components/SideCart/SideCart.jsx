import React from "react";

const SideCart = (props) => {
    const {singlePlayer} = props;
    console.log(singlePlayer);
    return (
    <div className="card h-25 text-center">
      <h3>Billinior's Club</h3>
      <input type="text" value={singlePlayer.length? singlePlayer.length : 0} disabled />
      <div className="text-start">
        <p className="mt-5">Players choosed: </p>
        {/* Playes list start */}


        {/* Players list ends */}
        <label htmlFor="cost" className="mt-5">
          Total Cost: <input type="text" value={0} disabled />
        </label>
        <button className="btn btn-primary mt-2 w-100"> Complete</button>
      </div>
    </div>
  );
};

export default SideCart;
