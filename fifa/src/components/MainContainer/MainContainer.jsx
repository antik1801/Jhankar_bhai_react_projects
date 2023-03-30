import React from 'react';
import { useEffect, useState } from 'react'
import { addToDbPlayers, getPlayersInfo } from '../../utilities/football';
import Home from '../Home/Home';
import SideCart from '../SideCart/SideCart';
import "./MainContainer.css"

const MainContainer = () => {
    const [players,setPlayers] = useState([]);
    const [selectedPlayers, setSelectedPlayers] = useState([])
    const handleBuyNow = (player) =>{
        const newPlayer = [...selectedPlayers, player]
        setSelectedPlayers(newPlayer);
        addToDbPlayers(player._id)
      }
  useEffect(()=>{
    fetch("player.json")
    .then(res => res.json())
    .then(data => setPlayers(data))
  },[])
  
  useEffect(()=>{
    // console.log(players);
    const storedPlayers = getPlayersInfo ();
    const addedPlayers = [];
    // step 1> get ID
    // console.log(storedPlayers);
    for (const id in storedPlayers) {
        // console.log(id);
        const savePlayers = players.find(player =>player._id  === id);
        addedPlayers.push(savePlayers);
    }
    setSelectedPlayers(addedPlayers);
  },[players])
    return (
        <div className='home-container'>
            <div className='row row-cols-1 row-cols-md-3 g-4'>{
                players.map(player=> <Home player={player} key={player._id} handleBuyNow={handleBuyNow}></Home>)
            }</div>
            <div className='side-cart'>
            <SideCart selectedPlayers={selectedPlayers}></SideCart>
            </div>
        </div>
    );
};

export default MainContainer;