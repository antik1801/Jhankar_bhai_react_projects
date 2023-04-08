import React, { useContext } from 'react';
import { moneyContext } from '../Grandpa/Grandpa';

const Sister = () => {
    const [money] = useContext(moneyContext);
    return (
        <div>
            <h1>Sister</h1>
            <p>Grandpa Money <h3>{money}</h3></p>
        </div>
    );
};

export default Sister;