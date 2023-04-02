import React from 'react';

const Link = (props) => {
    const {route} = props;
    
    return (
        <li className='mr-12'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;