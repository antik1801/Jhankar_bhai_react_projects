import React from 'react';

const Link = (props) => {
    const {route} = props;
    
    return (
        <li className='mr-12 text-3xl'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;