import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friend = useLoaderData();
    console.log(friend);
    return (
        <div>
            <h1 className='text-3xl font-semibold mt-5 text-gray-950'>Everything you need to know this person is here.</h1>
            <h4>Name: {friend.name}</h4>
            <h1>Id: {friend.id}</h1>
            <h3>Phone: {friend.phone}</h3>
        </div>
    );
};

export default FriendDetail;