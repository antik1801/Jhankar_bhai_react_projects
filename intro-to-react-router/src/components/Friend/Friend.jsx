import React from 'react';

const Friend = ({friend}) => {
    const {name,username,email,phone,id} = friend;
    return (
        <div>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>Username: {username}</p>
            <p>Phone: {phone}</p>
        </div>
    );
};

export default Friend;