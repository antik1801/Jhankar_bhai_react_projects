import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SinglePlayer = () => {
    const player = useLoaderData();
    
    // const singles = player.filter(eachPlayer => console.log(eachPlayer._id));
    console.log(player);
    return (
        <div>
            <h1>I am from single Player components.</h1>
        </div>
    );
};

export default SinglePlayer;