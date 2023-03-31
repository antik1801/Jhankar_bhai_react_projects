import React from "react";
import { getPlayersInfo } from "../../utilities/football";

const SideCart = (props) => {
    const {selectedPlayers} = props;
    let quantity = 0;
    const players = [];
    let total = 0;
    const getPlayersNumber = getPlayersInfo();
    console.log(getPlayersNumber);
    for (const singlePlayer of selectedPlayers) {
        
        if(!singlePlayer?._id in selectedPlayers){
            console.log('none');
        }
        total = total + parseFloat(singlePlayer?.balance);
        players.push(singlePlayer?.name)
        quantity = quantity +  singlePlayer?.quantity;
        // console.log(singlePlayer)
    }
    console.log(quantity);
    return (
    <div className="card h-50 text-center">
      <h3>Billinior's Club</h3>
      <input type="text" value={selectedPlayers.length? selectedPlayers.length : 0} disabled />
      <div className="text-start">
        <p className="mt-5">Players choosed: </p>
        {/* Playes list start */}
        {
            players?.map((player,index)=><li key={index}>{player}</li>)
        }
        {/* Players list ends */}
        <label htmlFor="cost" className="mt-5">
          Total Cost: <input type="text" value={total.toFixed(2)} disabled />
        </label>
        <button className="btn btn-primary mt-2 w-100"> Complete</button>
      </div>
    </div>
  );
};

export default SideCart;
