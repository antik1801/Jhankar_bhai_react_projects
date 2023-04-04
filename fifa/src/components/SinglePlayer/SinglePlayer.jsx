import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SinglePlayer = () => {
    const player = useLoaderData();
    console.log(player);
    return (
        <div>
            <h1>I am from single Player components.</h1>
        </div>
    );
};

export default SinglePlayer;