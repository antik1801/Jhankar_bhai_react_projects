import React from 'react';
import { useEffect, useState } from 'react'
import { getShoppingCart } from '../../utilities/fakedb';
import Home from '../Home/Home';
import SideCart from '../SideCart/SideCart';
import "./MainContainer.css"

const MainContainer = () => {
    const [players,setPlayers] = useState([]);
    const [singlePlayer, setSinglePlayer] = useState([])
    const handleBuyNow = (player) =>{
        const newPlayer = [...singlePlayer, player]
        setSinglePlayer(newPlayer);
      }
  useEffect(()=>{
    fetch("player.json")
    .then(res => res.json())
    .then(data => setPlayers(data))
  },[])
  useEffect(()=>{
    const storedCart = getShoppingCart();
    console.log(storedCart);

  },[players])
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