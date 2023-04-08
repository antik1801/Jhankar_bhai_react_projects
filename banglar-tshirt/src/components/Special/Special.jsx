import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({ring, children}) => {
    const angti = useContext(RingContext);
    return (
        <div>
            <h2>{ring}</h2>
            <p><small>{children}</small></p>
            <p><small>{angti}</small></p>
            
        </div>
    );
};

export default Special;