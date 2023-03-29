import React from 'react';
import { useEffect, useState } from 'react'
import Home from '../Home/Home';
import SideCart from '../SideCart/SideCart';
import "./MainContainer.css"

const MainContainer = () => {
    const [players,setPlayers] = useState([]);
    const [singlePlayer, setSinglePlayer] = useState([])
    const handleBuyNow = (player) =>{
        setSinglePlayer(player);
      }
  useEffect(()=>{
    fetch("player.json")
    .then(res => res.json())
    .then(data => setPlayers(data))
  },[])
//   console.log(players);
    return (
        <div className='home-container'>
            <div className='row row-cols-1 row-cols-md-3 g-4'>{
                players.map(player=> <Home player={player} key={player._id} handleBuyNow={handleBuyNow}></Home>)
            }</div>
            <div className='side-cart'>
            <SideCart singlePlayer={singlePlayer}></SideCart>
            </div>
        </div>
    );
};

export default MainContainer;