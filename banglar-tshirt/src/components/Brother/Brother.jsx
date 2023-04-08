import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Brother = () => {
    const ring = useContext(RingContext)
    return (
        <div>
            <h1>Brother</h1>
            <p>Ring: {ring}</p>
        </div>
    );
};

export default Brother;