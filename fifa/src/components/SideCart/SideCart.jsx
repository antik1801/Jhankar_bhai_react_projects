import React from "react";

const SideCart = (props) => {
    const {selectedPlayers} = props;
    // console.log(selectedPlayers);
    // const totalCost = selectedPlayers.reduce((firstNumber, secondNumber)=>selectedPlayers[0].balance,0)
    const players = [];
    let total = 0;
    for (const singlePlayer of selectedPlayers) {
        total = total + parseFloat(singlePlayer.balance);
        players.push(singlePlayer.name)
    }
    // console.log(players);
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
