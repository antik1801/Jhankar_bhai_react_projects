import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SinglePlayer = () => {
    const player = useLoaderData();
    
    // const singles = player.filter(eachPlayer => console.log(eachPlayer._id));
    console.log(player[0]);
    return (
        <div>
            <h1>Name: {player[0].name}</h1>
            <img src={`${player[0].picture}`} alt="" />
            
        </div>
    );
};

export default SinglePlayer;