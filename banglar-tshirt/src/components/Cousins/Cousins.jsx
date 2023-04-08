import React from 'react';
import Friend from '../Friend/Friend';

const Cousins= ({children, hasFriend , ring}) => {
    return (
        <div>
            <p><small>{children}</small></p>
            {hasFriend && <Friend ring={ring}></Friend>}
        </div>
    );
};

export default Cousins;