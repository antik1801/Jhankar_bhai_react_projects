import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <h1>This is Error.</h1>
            <Link to={"/"}>Click Here to go to main</Link>
        </div>
    );
};

export default Error;