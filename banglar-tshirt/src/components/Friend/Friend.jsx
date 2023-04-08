import React from 'react';

const Friend = ({ring}) => {
    return (
        <div>
            <h2>Friend</h2>
            {ring && <h2>{ring}</h2>}
        </div>
    );
};

export default Friend;