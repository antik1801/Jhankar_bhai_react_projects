import React from 'react';
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    const {name,username,email,phone,id} = friend;
    return (
        <div className='border-2 border-amber-300 p-4 rounded-lg hover:scale-105'>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>Username: {username}</p>
            <p>Phone: {phone}</p>
            <Link to={`/friend/${id}`}>Show me details</Link> 
        </div>
    );
};

export default Friend;